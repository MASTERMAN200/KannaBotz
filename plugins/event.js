let handler  = async (m, { conn, usedPrefix: _p }) => {
let event = `
┏━°❀❬ *EVENT* ❭❀°━┓
┃
┃> Tunggu Event Berikutnya !!
┃
┗━━━━━━━━━━━━━━━━
`.trim()

  conn.fakeReply(m.chat, event, '0@s.whatsapp.net', '*🔎 EVENT NOT FOUND !*')
}
handler.help = ['event']
handler.tags = ['hadiah']
handler.command = /^(event)$/i

handler.fail = null 

module.exports = handler
