let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let chat = DATABASE.data.chat
    let { isBanned } = DATABASE.data.chats[m.chat]
    let { banned } = DATABASE.data.users[m.sender]
    
    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'KannaBotz tidak aktif' : banned ? 'kamu dibanned' : 'A,ada apa kakk ? (＾▽＾)',
                'K a n n a  B o t z',
                isBanned ? '🔓 • UNBAN ༅' : banned ? '🎋 • Owner' : '彡 MENU',
                isBanned ? '.unban' : banned ? '.owner' : '.mainbutton',
                m.isGroup ? '🍀 • Donasi' : isBanned ? '🔓 • UNBAN' : '🍀 • DONASI',
                m.isGroup ? '.donasi' : isBanned ? '.unban' : '.donasi')
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `╭› *◇ Undang Bot ke Grup ◇*
├ 7 Hari / Rp 1,000
├ 14 Hari / Rp 5,000
├ 30 Hari / Rp 10.000
╰╮
››├🍀 Atau Masuk group KannaBotz Offiial
╭╯
├https://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT
╰╮
`.trim(), '© καɴɴα вσтᴢ', '✨ Owner ✨', '.owner', { contextInfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}