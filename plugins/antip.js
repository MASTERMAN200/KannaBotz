let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
❗ *DILARANG P !* ❗
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🚫 DILARANG P !*', 'status@broadcast')
}
handler.customPrefix = /^(p|pe|pek)$/i
handler.command = new RegExp

module.exports = handler
