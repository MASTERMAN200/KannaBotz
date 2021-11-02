const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah,dan masukkan nomor untuk di verivikasi !'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*🔖 Success Addprem*\n*🎯 Expired:* 30Days\n\n© KannaBot`)
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['addprems <nomor>']
handler.tags = ['owner']
handler.command = /^addprems|addprem$/i
handler.rowner = true

module.exports = handler