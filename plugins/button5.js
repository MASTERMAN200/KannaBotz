let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let { name, limit, level, role, age, money, healt, premium, registered } = global.DATABASE.data.users[m.sender] 
pp = await conn.getProfilePicture(global.conn.user.jid)
conn.sendButtonImg(m.chat, 'Pilih Menu Di Bawah Ya Kak\nDan Jangan Lupa Baca Rules Dibawah Ini\n\nSpam = Banned\nTelp = Blok\n\nSubscribe Me\nYUSUFZ CHANNEL\n\nJoin My Grup WhatsApp Official\nhttps://chat.whatsapp.com/GGzB0VFvH7KLT7WQZ7WrMY\n\n\nMy Rest Api\n1. https://yusufz-api.herokuapp.com\n2. https://yusufbot.api.herokuapp.com', 'https://i.ibb.co/V22xB3c/IMG-20210922-174158.jpg', `❏ Registered : ${registered ? 'Yes': 'No'}\n❏ Name : ${name}\n❏ Age : ${age}\n❏ Ticket : ${limit}\n❏ Role : ${role}\n❏ Money : ${money}\n❏ Level : ${level}\n❏ Health : ${healt}\n❏ Premium : ${premium ? 'Yes': 'No'}\n\n Thanks To\nNurutomo\nAriffb25\nFernazer\nRudiAchil\nZeroBot\nBochillGaming\nNYX\nMe\nAnd All Creator Bot\n\nKalau Wa Mod, Ketik .wey`.trim(), 'LIST MENU', '/apaluwahyukan',m)
  }
handler.help = ['menu', 'help']
handler.tags = ['main'] 
handler.command = /^(menu|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler

//Udh Di Fix Eror By Fernazer
//TqTq To Jangan Di Hapus Lah, Emg Lu siapa Main Hapus Aja Lu Tu Cmn Numpang Mending Di Tambahin Aja
//Sekali Ketauan Di Hapus Semua Atau Di Ganti, Gw Enc Mmpus Lu Ga Bisa Ubah