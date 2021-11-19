let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch(global.API('botstyle', '/api/loli', {}, 'apikey'))

  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result) throw 'Error!'
  conn.sendFile(m.chat, json.result, '', 'Kyaa ! Kawaii ! >-<', m)
}
handler.help = ['loli2']
handler.tags = ['anime']
handler.command = /^(loli2)$/i

module.exports = handler
