// By Fernazer 
let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = m => m

let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

handler.before = function (m, { isOwner, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = global.DATABASE.data.chats[m.chat]
    let user = global.DATABASE.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (!chat.antiBadword && !chat.isBanned && isBadword) {
        user.warning += 1
        this.send2Button(m.chat, `*「Anti Badword」*\n
🔥 *Dosa* : ${user.warning} / 50

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).
"Whoever believes in God and the Last Day then let him say good or be silent" (HR. al-Bukhari and Muslim).
`, '©KannaBot', 'Matikan Antibadword', '.disable antibadword', 'Astagfirllah', '.maaf')
        if (user.warning >= 50) {
            user.banned = true
         m.reply(`Awokawok masuk Neraka 🗿`)
       }
    }
    return !0
}
module.exports = handler