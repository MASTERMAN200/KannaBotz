let handler  = async (m, { conn, usedPrefix: _p }) => {
let str = `
╭═══ *〘 SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _1k/grup (1 minggu)_
║┊ ⌲ Sewa = _5k/grup (2 minggu)_
║┊ ⌲ Sewa = _10k/grup (1 bulan)_
║┊ ⌲ Sewa = _15k/grup (2 bulan)_
║┊ ⌲ Sewa = _20k/grup (12 bulan)_
╰═ ┅ ═══════

╭═══ *〘 Via 〙*
║ ┅ ๑————————————๑
║┊ ⌲ *INDOSAT* : _085712420674_
║┊ ⌲ *AXIS* : _083143393763_
║┊ ⌲ *OVO* : _085712420674_
║┊ ⌲ *DANA* : _085712420674_
║┊ ⌲ *GOPAY* : _085712420674_
║┊ ⌲ *SAWERIA* : _https://saweria.co/KannaBotz_
╰═ ┅ ═══════

༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Limit UNLIMITED*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT_

Ingin Jadi Bot Seperti ini?
ketik #jadibot
`.trim()
conn.sendButton(m.chat,str, `🎮 KannaBot`, `🐾 Owner`, `.owner`, m)
}
handler.help = ['sewabot','sewa']
handler.tags = ['main']
handler.command = /^(sewabot|sewa)$/i

handler.limit = false

module.exports = handler