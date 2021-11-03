let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, premium, level, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `

ʚ°•·.҂ *Profile* ⑂
📇 • Name: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n📃 • About: ' + about : ''}
🌟 • Premium: ${premium ? "Yes" :"No"}
🆔 • Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
💻 • Link: https://wa.me/${who.split`@`[0]}${registered ? '\n〽️ Age: ' + age : ''}
💹 • Uang: ${exp}
📊 • Level: ${level}
🎫 • Limit: ${limit}
📑 • Registered: ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}${lastclaim > 0 ? '\n🕜 Last Claim: ' + new Date(lastclaim) : ''}

`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile|pp$/i
module.exports = handler