let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

    const buttons = [
        {buttonId: '.nomorowner', buttonText: {displayText: '✧ Nomor Owner'}, type: 1},
        {buttonId: '.info', buttonText: {displayText: '➲ Info'}, type: 1},
        {buttonId: '.mainbuntton', buttonText: {displayText: '⋮☰ Back'}, type: 1},
    ]

    const buttonMessage = {
        contentText: "*BIOTADA OWNER*\n\n*Nama* : Letta\n*Umur* : 12 Tahun\n*Kelas* : 7 Smp\n*Status* : Busy",
        footerText: '⊰💭 Social Media ⊹⊱\n◈ Instagram : @ppiowy_\n◈ Facebook : None\n◈ Discord : #6016\n\n🎮 KannaBot',
        buttons: buttons,
        headerType: 1
    }
    let handler = async (m, { conn }) => {
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage )
}

handler.help = ['owner']
handler.tags = ['main']
handler.command = /^owner$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
