let handler  = async (m, { conn, usedPrefix: _p }) => {
let botol = global.botwm
let pp = 'https://telegra.ph/file/0e7140602ef74e9251fc5.jpg'
let info = `
╭═══ *〘 BUY PREMIUM 〙*
║ ┅ ๑————————————๑                                         
║┊ ⌲ *Buy* = _5k/minggu (7 Hari)_
║┊ ⌲ *Buy* = _10k/bulan (1 bulan)_
║┊ ⌲ *Buy* = _20k/tahun (12 bulan)_
║┊ ⌲ *VIP* = _30k/Permanent_
╰═ ┅ ═══════                                               
╭═══ *〘 Via 〙*
║ ┅ ๑————————————๑
║┊ ⌲ *INDOSAT* : _085712420674_
║┊ ⌲ *AXIS* : _083143393763_
║┊ ⌲ *OVO* : _085712420674_
║┊ ⌲ *GOPAY* : _085712420674_
║┊ ⌲ *DANA* : _085712420674_
║┊ ⌲ *SAWERIA* : _https://saweria.co/KannaBotz_
╰═ ┅ ═══════

༅ _*KEUNTUNGAN USER PREMIUM*_

✧ *Fitur Premium Terbuka*
✧ *Limit UNLIMITED*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Fitur Game Banyak Sepuas Nya Main*
✧ *Bisa Memasukkan Bot Ke dalam Grup*
✧ *Fitur Nsfw Terbuka*


◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT_

Ingin Jadi Bot Seperti ini?
ketik #jadibot
`.trim()
conn.sendButtonImg(m.chat,info,pp, `${botol}`, `🐾 Owner`, `.owner`, m)
} 
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^premium$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler