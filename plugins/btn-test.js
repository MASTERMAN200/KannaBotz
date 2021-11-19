let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

    const buttons = [
        {buttonId: '.allmenu', buttonText: {displayText: '⋮☰ Menu'}, type: 1},
        {buttonId: '.rules', buttonText: {displayText: '྿ Rules'}, type: 1},
        {buttonId: '.owner', buttonText: {displayText: '❦ Owner'}, type: 1},
    ]

    const buttonMessage = {
        contentText: "☇︎🎮 *Ƙαɴɴα ωαвσт ᵒᶠᶠⁱᶜⁱᵃˡ* ⊹⊱\n\nPilih Menu Di bawah ya !\n📢 Spam = Banned\n📢 Call = Block\n\n☇︎⊰💭 Follow My Ig : ⁺◛˖\n_https://instagram.com/ppiowy__\n\n☇︎⊰💌 Support Group : ⁺◛˖\nhttps://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT",
        footerText: '⊰⊹ ṧιмρʟᴇ ᴍɛɴʋ\n♯ Xpmenu\n♯ Hadiahmenu\n♯ Dewasamenu\n♯ Grupmenu\n♯ Creatormenu\n♯ Editormenu\n♯ Convertermenu\n♯ Funnmenu\n♯ Gamemenu\n♯ Videomenu\n♯ Imagemenu\n♯ Soundmenu\n♯ Randommenu\n♯ PrimbonMenu\n♯ EducationMenu\n♯ Musicmenu\n♯ Simimenu\n♯ Kerangmenu\n♯ Downloadermenu\n♯ Newsmenu\n♯ Spammermenu\n♯ Searchmenu\n♯ Toolsmenu\n♯ JadibotMenu\n♯ Premiummenu\n♯ Hostmenu\n♯ Infomenu\n♯ Gcbot\n\n⊰⊹ Silahkan Cek Fitur Baru di #update !\n\n\n⎋ KannaBot\n   ◈ By IluluOfficial',
        buttons: buttons,
        headerType: 1
    }
    let handler = async (m, { conn }) => {
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage )
}

handler.help = ['mainbutton']
handler.tags = ['main']
handler.command = /^mainbutton$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
