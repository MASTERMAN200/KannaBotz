let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=holo&apikey=hardianto`
  conn.sendFile(m.chat, res, 'pussy.jpg', ``, m, false)
}
handler.help = ['nsfwholo'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(nsfwholo)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler