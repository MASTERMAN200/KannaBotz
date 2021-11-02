let handler = m => m
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (user.afk > -1) {
    m.reply(`╭ *◇ AFK ◇* ╮
├╯ *BERHENTI AFK !*
├🔖 ${user.afkReason ? ' Setelah ' + user.afkReason : ''}
├🔖 Time : ${clockString(new Date - user.afk)}
╰╮ © KannaBot
`.trim())
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.DATABASE.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(`╭ *◇ AFK MODE ◇* ╮
├╯📢 Jangan tag dia! Dia sedang AFK !
├🔖 ${reason ? 'Dengan Alasan ' + reason : 'Tanpa Alasan'}
├🔖 Time : ${clockString(new Date - afkTime)}
╰╮ © KannaBot
`.trim())
  }
  return true
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
