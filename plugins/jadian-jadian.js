/*//////////////////////////////////

    Di Upload Oleh Fokus Dot Id 

/*////////////////////////////////*/

let handler = async (m, { conn, usedPrefix, text }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  const format = num => {
    const n = String(num),
          p = n.indexOf('.')
    return n.replace(
        /\d(?=(?:\d{3})+(?:\.|$))/g,
        (m, i) => p < 0 || i < p ? `${m},` : m
    )
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Masukan nomor, tag target atau balas pesan target`, m)
  // let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)
  if(isNaN(number)) return conn.reply(m.chat, `_*Nomor tidak valid.*_`, m)
  if(number.length > 15) return conn.reply(m.chat, `*_Format Tidak Valid.*_`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.jid == user) : {}
    if(!users) return conn.reply(m.chat, `*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`, m)
    if(user === m.sender) return conn.reply(m.chat, `_*Tidak bisa berpacaran dengan diri sendiri 🙂💔*_`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `_*Tidak bisa berpacaran dengan saya 🙂💔*_`, m)

    if (typeof global.DATABASE.data.users[user] == "undefined") return m.reply("*🗃️ DataBase Not Found*\n🍂 Alasan :\n_*Orang yang anda tag tidak terdaftar di dalam database.*_")
    
    if(global.DATABASE.data.users[m.sender].pasangan != "" && global.DATABASE.data.users[global.DATABASE.data.users[m.sender].pasangan].pasangan == m.sender && global.DATABASE.data.users[m.sender].pasangan != user){
      conn.reply(m.chat,`💕 Kamu sudah berpacaran dengan @${global.DATABASE.data.users[m.sender].pasangan.split('@')[0]}\n\n🔖 Silahkan putus dulu (ketik .putus untuk memutuskan hubungan) untuk menembak @${user.split('@')[0]}\n\nBtw yang setia dikit banget!`,m,{contextInfo: {
        mentionedJid: [user,global.DATABASE.data.users[m.sender].pasangan]
      }})
    }else if(global.DATABASE.data.users[user].pasangan != ""){
      var pacar = global.DATABASE.data.users[user].pasangan
      if (global.DATABASE.data.users[pacar].pasangan == user){
        if (m.sender == pacar && global.DATABASE.data.users[m.sender].pasangan == user) return conn.reply(m.chat,`Anda sudah berpacaran dengan @${beb.split('@')[0]}`,m,{contextInfo: {
          mentionedJid: [beb]
        }})
        conn.reply(m.chat,`Maaf, @${user.split('@')[0]} sudah berpacaran dengan @${pacar.split('@')[0]} 🙂💔\nSilahkan cari pasangan lain!`,m,{contextInfo: {
          mentionedJid: [user,pacar]
        }})
      }else{
        global.DATABASE.data.users[m.sender].pasangan = user
        conn.reply(m.chat,`Anda baru saja mengajak @${user.split('@')[0]} berpacaran 💕\n\n[❗] Silahkan menunggu jawaban darinya. . .\n\n📝 Ketik:\n *📍 ${usedPrefix}terima @user* untuk menerima\n*📍 ${usedPrefix}tolak @user* untuk menolak`,m,{contextInfo: {
          mentionedJid: [user]
        }})
      }
    }else if (global.DATABASE.data.users[user].pasangan == m.sender){
      global.DATABASE.data.users[m.sender].pasangan = user
      conn.reply(m.chat,`🎉 Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu 🥳🥳🥳`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }else {
      global.DATABASE.data.users[m.sender].pasangan = user
      conn.reply(m.chat,`Kamu baru saja mengajak @${user.split('@')[0]} berpacaran 💕\n\n[❗] Silahkan menunggu jawaban darinya. . .\n\n📝 Ketik\n*📍 ${usedPrefix}terima @user* untuk menerima\n*📍 ${usedPrefix}tolak @user* untuk menolak`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }
	}	
}
handler.help = ['tembak @tag']
handler.tags = ['fun','jdh']
handler.command = /^(tembak)$/i
handler.group = true
handler.limit = false
handler.fail = null
module.exports = handler