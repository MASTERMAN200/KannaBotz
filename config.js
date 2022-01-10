global.DeveloperMode = 'false' //Buat Mode True False Moderator
global.linkGC = ['']
global.channelYT = ['ZEEONE OFC'] 
global.owner = ['6289625556161'] // Nomer Owner Utama
global.mods = [''] // Buat Owner Biar Unlimitid
global.prems = [''] // Buat Yg User Premium 

global.botwm = 'BOT WANGSAF V5 '//UBAH JADI NAMAMU
global.wait = '*[❗] Wait. . .*'
global.progses = '*[❗] Loading. . .*'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

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
  ana: 'https://anabotofc.herokuapp.com/',
  zekais: 'http://zekais-api.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Bree Isi Di Sini
  // 'https://website': 'apikey':
  'https://api.lolhuman.xyz': '511fc49c7ad4edcecf8653cf',
  'https://api.xteam.xyz': 'd81ce7556c32afe3', 
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'NinoWangy',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'DestaPrasApi' 
}

// Sticker WM
global.packname = '🍀 • Sticker By :\n Bot Wangsaff V5'
global.author = '🇯🇵 • Number Bot :\n wa.me/62896255561617'

global.multiplier = 9 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
