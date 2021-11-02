let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=kurrxd09`)
  let json = await res.buffer()
  conn.sendFile(m.chat, json, 'darkjokes.png', `🎮 KannaBot`, m, false)
}
handler.help = ['darkjokes']
handler.tags = ['internet','image']

handler.command = /^(darkjokes)$/i
handler.register = true

module.exports = handler
