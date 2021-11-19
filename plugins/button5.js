let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let { name, limit, level, role, age, money, healt, premium, registered } = global.DATABASE.data.users[m.sender] 
pp = await conn.getProfilePicture(global.conn.user.jid)
conn.send2ButtonImg(m.chat, 'Pilih Menu Di Bawah ya\nDan Jangan Lupa Baca Rules Dibawah Ini\n\n📢 Spam = Banned\n📢 Telp = Blok\n\n🔖 Follow My ig :\n⤷ Ppiowy_\n\n💭 Join My Grup WhatsApp Official\n⤷ https://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT\n\n\n📛 My Rest Api\n⤷ https://yusufz-api.herokuapp.com\n⤷ https://yusufbot.api.herokuapp.com', 'https://i.postimg.cc/jjz8YvZj/d0f8b804a908ce4aaee63d54035d2192.jpg', `📇 INFO USER ↵♯❜\n\n📑 Registered : ${registered ? 'Yes': 'No'}\n🏷  Name : ${name}\n〽️ Age : ${age}\n🎫 Ticket : ${limit}\n📍 Role : ${role}\n💹 Money : ${money}\n📊 Level : ${level}\n❤️ Health : ${healt}\n🌟 Premium : ${premium ? 'Yes': 'No'}\n\n📔 Thanks To\nNurutomo\nAriffb25\nFernazer\nRudiAchil\nZeroBot\nBochillGaming\nNYX\nThe.sad.boy01\nMe\nAnd All Creator Bot\n\nUntuk Wa Mod, Ketik .simplemenu atau .allmenu`.trim(), '⋮☰ LISTMENU', '/mainbutton', '🔎 INFO', '.info',m)
  }
handler.help = ['about']
handler.tags = ['main'] 
handler.command = /^(about)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = false

handler.fail = null
handler.exp = 20

module.exports = handler

//Udh Di Fix Eror By Fernazer
//TqTq To Jangan Di Hapus Lah, Emg Lu siapa Main Hapus Aja Lu Tu Cmn Numpang Mending Di Tambahin Aja
//Sekali Ketauan Di Hapus Semua Atau Di Ganti, Gw Enc Mmpus Lu Ga Bisa Ubah