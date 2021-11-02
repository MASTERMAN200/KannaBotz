let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`╭ *◇ AFK MODE ◇* ╮
├╯ *NOW AFK !*
├🔖 Name : ${conn.getName(m.sender)}
├🔖 Alasan : ${text ? '' + text : ''}
╰╮ © KannaBot 
`)
}
handler.help = ['afk <alasan>']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler
