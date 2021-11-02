let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [m.sender]
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, tigame, user, level, role, money, premium, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
╭◈ *「 USER 」*
├─ 📇 *Name* : ${username}
├─ 🆔 *Nomor* : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
├─ 🌟 *Premium* : ${premium ? "Yes" :"No"}
├─ 〽️ *Age* : ${registered ? '' + age : ''}
├─ 📍 *Role* : ${role}
├─ 🎫 *Limit* : ${limit}
├─ 🎟 ️ *Limit Game* : ${tigame}
├─ 📊 *Level* : ${level}
├─ 💹 *Money* : ${money}
╰─ ✨ *Exp* : ${exp}

`.trim()
    conn.send2Button(m.chat, str, `🎮 KannaBot`, `🎒 Inventory`, `.inv`, `👤 Profile`, `.profile`, m)
    let mentionedJid = [who]
  }
}
handler.help = ['my','dompet']
handler.tags = ['xp']
handler.register = true
handler.command = /^my|dompet$/i
module.exports = handler