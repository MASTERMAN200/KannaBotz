let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    let user = global.DATABASE.data.users[m.sender]
    if (new Date - user.pc < 43200000) return // setiap 12 jam
    await this.sendButton(m.chat, `
${ucapan()} Kak !
${user.banned ? '[❗] Kamu Dibanned Oleh Owner ! (ㆁωㆁ)' : 'Ada yang bisa saya bantu? (ㆁωㆁ)'}
`.trim(), '🎮 KannaBot', user.banned ? '🐾 Owner' : '⋮☰ Menu', user.banned ? '.owner' : '.mainbutton')
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}