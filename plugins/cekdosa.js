let handler = async (m) => {
    let user = DATABASE.data.users[m.sender]
    let who = m.mentionedJid && m.mentionenJid ? m.mentionedJid : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [m.sender]
    let username = conn.getName(who)
    let str = `🔥 *Dosa ${username}* : ${user.warning} / 50
`.trim(), m)
    conn.sendButton(m.chat, str, `🎮 KannaBot`, `Tobat 🛐`, `.maaf`, m)
}
handler.help = [`cekdosa`]
handler.tag = [`fun`,`islam`]
handler.command = /^(cekdosa|dosa)$/i

module.exports = handler
