let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://recoders-area.caliph.repl.co/api/waifu?apikey=FreeApi`
 conn.sendFile(m.chat, res, 'waifu.jpg', `wangy wangy wangy`, m, false)
  memg = `MAU LANJUT NGAB?`
  conn.sendButton(m.chat, memg, '- Cintai Waifu :v', 'YOI:v', '.waifu')
}
handler.help = ['waifu'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(waifu)$/i

module.exports = handler