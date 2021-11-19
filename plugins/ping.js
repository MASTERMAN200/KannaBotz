let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await m.reply('_⚡ Testing speed..._')
  let neww = performance.now()
  await conn.send2Button(m.chat, neww - old + 'ms', `${botol}`, '⋮☰ BACK', '.menu', 'ϟ BOOST', '.boost', { quoted: m })
  
}
handler.help = ['ping']
handler.tags = ['info', 'tools']

handler.command = /^(ping)$/i
module.exports = handler

let botol = global.botwm