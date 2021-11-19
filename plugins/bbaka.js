let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let ara = fs.readFileSync('./audio/baka.m4a') 
conn.sendMessage(m.chat, ara, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
conn.fakeReply(m.chat, ara, '0@s.whatsapp.net', '*B,bakka !**', 'status@broadcast')
}

handler.customPrefix = ['b']
handler.tags = ['audio'] 
handler.command = /^(aka)$/i

handler.owner = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
