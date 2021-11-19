let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag orangnya!`
    if (global.owner.includes(who.split`@`[0])) throw 'dia udah menjadi owner !'
    global.owner.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `╭┦ *SUCCES ✔*\n┝▸ 🎋 *Name* : @${who.split`@`[0]}\n╰┦ Check owner menu on *!allmenu*\n\n྿ you are now the owner`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addowner [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)owner$/i

handler.owner = true

module.exports = handler