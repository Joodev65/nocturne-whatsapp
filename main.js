require("./system/global");
const func = require("./system/place");
const usePairingCode = true;
const { Boom } = require('@hapi/boom');
const { load_Module } = require("./system/function.js");

global.status = 0;

const DataBase = require('./system/database.js');
const database = new DataBase();
(async () => {
  const loadData = await database.read();
  if (loadData && Object.keys(loadData).length === 0) {
    global.db = { users: {}, groups: {}, database: {}, settings: {}, ...(loadData || {}) };
    await database.write(global.db);
  } else {
    global.db = loadData;
  }
  setInterval(async () => {
    if (global.db) await database.write(global.db);
  }, 5000);
})();

async function startSesi() {
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
  const { state, saveCreds } = await useMultiFileAuthState(`./session`);
  const connectionOptions = {
    version: (await (await fetch('https://raw.githubusercontent.com/Joodev65/joo/main/Baileys/Bails-version.json')).json()).version,
    browser: ['Ubuntu', 'Safari', '18.1'],
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
        return msg?.message || undefined;
      }
      return { conversation: 'hallo' };
    },
    printQRInTerminal: !usePairingCode,
    logger: pino({ level: 'silent' }),
    auth: state
  };

  const Skyzopedia = await func.makeWASocket(connectionOptions);

  if (usePairingCode && !Skyzopedia.authState.creds.registered) {
    const phoneNumber = process.env.NUMBER;   
    if (!phoneNumber) {
      console.log('Nomor Blom DiSet');
      process.exit(1);
    }
    const code = await Skyzopedia.requestPairingCode(phoneNumber.trim());
    console.log(`PAIRING_CODE=${code}`);       
  }

  await store?.bind(Skyzopedia.ev);

  Skyzopedia.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.restartRequired) startSesi();
      else if (reason === DisconnectReason.loggedOut) Skyzopedia.logout();
      else process.exit(1);
    } else if (connection === 'open') {
      console.log('✅ WhatsApp berhasil tersambung!');
    }
  });

  Skyzopedia.ev.on('messages.upsert', async (chatUpdate) => {
    try {
      m = chatUpdate.messages[0];
      if (!m.message) return;
      m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message;
      if (m.key && m.key.remoteJid === 'status@broadcast') return;
      if (!Skyzopedia.public && m.key.remoteJid !== global.owner + "@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return;
      m = await func.smsg(Skyzopedia, m, store);
      if (m.isBaileys) return;
      if (status == 0) {
        await load_Module(Skyzopedia);
        global.status = 1;
      }
      require("./noct.js")(Skyzopedia, m, store);
    } catch (err) {
      console.log(err);
    }
  });

  Skyzopedia.ev.on('creds.update', saveCreds);
  Skyzopedia.public = true;
  return Skyzopedia;
}

startSesi();

process.on('uncaughtException', console.log);