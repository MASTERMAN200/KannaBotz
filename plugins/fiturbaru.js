let handler  = async (m, { conn, usedPrefix: _p }) => {
let event = `
┏━°❀❬ *FIRUT BARU* ❭❀°━┓
┃> jadian
┃> mining (update)
┃> duel
┃> dungeon
┃> craft
┃> cook
┃> Rankliga
┃> Mancing (in progsess)
┃> mainbutton (tombol menu)
┃> nsfwwaifu / waifunsfw (premium)
┃> loli (fix)
┃> play (update)
┃> namaninja  /  namae
┃
┗━━━━━━━━━━━━━━━━
`.trim()

  conn.fakeReply(m.chat, event, '0@s.whatsapp.net', '*📃 NEW FITUR !*')
}
handler.help = ['listupdate']
handler.tags = ['main']
handler.command = /^(update|listupdate|fiturbaru|newfitur)$/i

handler.fail = null 

module.exports = handler
