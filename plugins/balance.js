//**IRI BILANG BOSS AHAY PAPALE PAPALE PAPALE PAPALE PALE
//BY RIZKY
//SILAHKAN REKODE MEK

let handler = async (m, { conn, usedPrefix }) => {

let user = global.DATABASE.data.users[m.sender]
let name = conn.getName(m.sender)

let caption = `
╭──⌠ _*💲 BALANCE*_ ⌡
├ 🔖 _${name} Bank Account 👛_
├┮◈
*│├ 💵 Balance :* ${user.money}
*│├ 🪙 Koin :* ${user.emas}
*│├ ✨ Exp :* ${user.exp}
╰┴────────────

Untuk Menukar exp ke money ketik
${usedPrefix}tukarmoney 100
`

conn.reply( m.chat, caption, m)
}

handler.help = ['balance']
handler.tags = ['xp']
handler.command = /^(balance|bal)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
