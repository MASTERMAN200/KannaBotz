let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, money, healt, role } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
🔖°•· *Sisa Limit Kamu :* _*${limit} 🎟*_

untuk membeli limit ketik */buy nominal*
_contoh : */buy 5*_
`.trim()
    let mentionedJid = [who]
    m.reply(str)
  }
}
handler.help = ['limit']
handler.tags = ['xp']
handler.command = /^limit$/i
module.exports = handler