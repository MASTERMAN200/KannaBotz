let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*〧 Script BotWa 🎋‷*

◈
┝▸ 🐾 *Script :* https://github.com/nurutomo/wabot-aq
┝▸ 🔥 *RestApi :* https://restapi-kannabot.herokuapp.com/
╰⋆
`.trim()
await conn.send2Button(m.chat, info, `${botol}`, '⋮☰ Back', '.menu', 'Tutorial', '.cbb', { quoted: m })
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

let botol = global.botwm
