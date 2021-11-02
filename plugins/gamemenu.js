let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let str = `
┌─── ⳹°❀❬ GAME MENU ❭❀°
│✎ ${usedPrefix}angka <0-9>
│✎ ${usedPrefix}asahotak
│✎ ${usedPrefix}caklontong
│✎ ${usedPrefix}cantikcek (limit)
│✎ ${usedPrefix}cari <query>
│✎ ${usedPrefix}casino <jumlah>
│✎ ${usedPrefix}dadu
│✎ ${usedPrefix}dadu2
│✎ ${usedPrefix}dare
│✎ ${usedPrefix}dungeon [custom room name]
│✎ ${usedPrefix}family100
│✎ ${usedPrefix}gantengcek (limit)
│✎ ${usedPrefix}gaycek (limit)
│✎ ${usedPrefix}iqtest
│✎ ${usedPrefix}kuis
│✎ ${usedPrefix}math <mode>
│✎ ${usedPrefix}math2
│✎ ${usedPrefix}slot <angka>
│✎ ${usedPrefix}siapakahaku
│✎ ${usedPrefix}slots (limit)
│✎ ${usedPrefix}suit
│✎ ${usedPrefix}susunkata
│✎ ${usedPrefix}tebakanime
│✎ ${usedPrefix}tebakbendera
│✎ ${usedPrefix}tebakkata
│✎ ${usedPrefix}tebakkimia
│✎ ${usedPrefix}tebaklagu (limit)
│✎ ${usedPrefix}tebaktebakan
│✎ ${usedPrefix}tekateki
│✎ ${usedPrefix}tololcek
│✎ ${usedPrefix}truth
│✎ ${usedPrefix}twister
└────────────┈ ⳹ ❋ཻུ۪۪⸙
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['gamemenu']
handler.tags = ['jj']
handler.command = /^(gamemenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler