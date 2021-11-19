let handler = async (m, { conn }) => {
  let own = global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `「 List Owner 」` + `\n` + owner.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, m, { contextInfo: { mentionedJid: own } })
}
handler.help = ['ownlist']
handler.tags = ['owner']
handler.command = /^(listown|ownlist)$/i
handler.owner = true

module.exports = handler