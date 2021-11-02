let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Ovo:* 6285712420674
• *Dana:* 6285712420674
• *Axis:* 6283143393763

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/ppiowy_	

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6285712420674', '🔖 °•· Owner', idnya)
  }
  return true
}

module.exports = handler