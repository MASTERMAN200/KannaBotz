let handler = async (m, { conn, text }) => {
    if (!text) throw 'Who wants to be banned?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.DATABASE.data.users
    users[who].banned = true
    conn.reply(m.chat, `🌹 Ban User ◉
✘ Succes banned user ! 
contact my owner to open banned !\n wa.me/6285712420674?text=kak+buka+banned+aku+dong,+,+,`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban2$/i
handler.rowner = true

module.exports = handler