let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag orangnya!`
    if (global.prems.includes(who.split`@`[0])) throw 'dia udah premium!'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `╭┦ *SUCCES ✔*\n┝▸ 🎋 *Name* : @${who.split`@`[0]}\n╰┦ Check premium menu on *!allmenu*\n\n🔖 Note : Thx For Buy prem !`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addprem [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i

handler.owner = true

module.exports = handler