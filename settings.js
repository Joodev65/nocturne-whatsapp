/*

# Made / Recode By Joocode Official
Nocturne Latest Version

# Base By Skyzopedia ( Kosong )
Free Rename / Recode

Credit By
• t.me/Joocode ( Developer )
• t.me/Joocodee ( Developer )

*/

require("./system/module.js")

global.owner = ""
global.namabot = "" 
global.namaowner = ""
global.packname = ""
global.author = ""
global.antri = 5000
global.id = "" // ɪsɪ ɪᴅ ᴄʜᴀɴɴᴇʟ ᴍᴜ
global.footer = ""
global.msg = {
wait: "Memproses . . .", 
owner: "Fitur ini khusus untuk owner!", 
group: "Fitur ini untuk dalam grup!", 
admin: "Fitur ini untuk admin grup!", 
botadmin: "Fitur ini hanya untuk bot menjadi admin"
}


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})