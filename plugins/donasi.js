let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://telegra.ph/file/c9f6f5b4e184a88de5da3.jpg'
let botol = global.botwm
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
│wa.me/6285712420674?text=kak+mau+donasi
╰──────────···───╮

*[ ❗ ] Bonus :*
Yang Donasi Dapet premium 3 hari, Free !
`.trim()
conn.sendButtonImg(m.chat,str,pp, `${botol}`, `🐾 Owner`, `.owner`, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
