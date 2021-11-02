let handler  = async (m, { conn, usedPrefix: _p }) => {
let str = `
››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Axis:* 6283143393763
│┝‷✧ *Dana:* 6285712420674
│┝‷✧ *Linkaja:* 6285712420674
│┝‷✧ *Gopay:* 6285712420674
│┝‷✧ *Ovo:* 6285712420674
│┝‷✧ *Saweria:* https://saweria.co/KannaBotz
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6285712420674?text=bang+mau+donasi
╰──────────···───╮

*[ ❗ ] Bonus :*
Yang Donasi Dapet premium 3 hari, Free !
`.trim()
conn.sendButton(m.chat,str, `🎮 KannaBot`, `🐾 Owner`, `.owner`, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
