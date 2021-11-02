let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, level, premium, limit, exp, lastclaim, registered, regTime, age, money, healt, role } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
⤷🔖 *✧ INFO ◈* 
    
*📇 Username:* ${username}
*🌟 Premium:* ${premium ? 'Yes': 'No'}
*❤️ Health:* ${healt}
*💹 Money:* Rp.${money}
*✨ Xp:* ${exp}
*🎫 Limit:* ${limit}
*📊 Level:* ${level}
*📍 Role:* ${role}
`.trim()
    let mentionedJid = [who]
    m.reply(str)
  }
}
handler.help = ['bank']
handler.tags = ['xp']
handler.command = /^bank$/i
module.exports = handler