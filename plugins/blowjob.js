let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=blowJob&apikey=hardianto`
  conn.sendFile(m.chat, res, 'blowjob.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['blowjob'].map(v => v + ' ')
handler.tags = ['dewasa','premium']

handler.command = /^(blowjob)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler