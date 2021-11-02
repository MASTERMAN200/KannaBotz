global.DeveloperMode = 'false' //Buat Mode True False Moderator
global.linkGC = ['https://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT']
global.channelYT = ['ZEEONE OFC'] 
global.owner = ['6285712420674','6283143393763','6288217277973','62831433937630','6288217277973','6285704954639']// Nomer Owner Utama
global.mods = ['6283143393763'] // Buat Owner Biar Unlimitid
global.prems = ['6281357620824'] // Buat Yg User Premium 

global.botwm = '🎮 Ƙαɴɴα вσт '//UBAH JADI NAMAMU

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Bree Isi Di Sini
  // 'https://website': 'apikey':
  'https://api.lolhuman.xyz': '511fc49c7ad4edcecf8653cf',
  'https://api.xteam.xyz': 'kurrxd09', 
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'NinoWangy',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'DestaPrasApi' 
}

// Sticker WM
global.packname = '🍀 • Sticker By :\n⤷ καɴɴαвσтᴢ ɞ \n\n🔖 • By :\n⤷ίℓʋɭų ǫғғιcιαℓ あ'
global.author = '🇯🇵 • Number Bot :\n⤷ wa.me/6283143393763\n\n🎮 • Discord :\n⤷ https://discord.gg/WEJQjugTY7'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
