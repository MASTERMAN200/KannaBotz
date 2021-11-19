function handler(m) {
  m.reply(`╭─› 📢 *RULES* ‹╮
╰┬╮
╭┤│▸ ✅ *HARAP PATUHI*
│││▸ 🛂 *DALAM PENGAWASAN OWNER*
││╰─────···────›
│├➢ Dilarang Hina Bot / Owner
│├➢ Dilarabg Spam Command
│├➢ Dilarang Kirim Virtex
│├➢ Dilarang Spam Menu Ga Jelas
│├➢ Dilarang Telp / Vc
│├➢ Dilarang Culik Bot
│├➢ Dilarang Promosi
│├➢ Dilarang Meniru pesan Bot
│├➢ Bot Tidak Menerima Save Kontak
│├➢ Dilarang P
│├➢ Dilarang Chat Owner Ga Jelas
│╰─────···────›
│[❗] OWNER BERHAK BLOCK TANPA ALASAN
╰─────·····────────────›
[📍] Note :
KALO MELANGGAR AKAN LANGSUNG DIBAN DAN DI BLOKIR TANPA TOLERANSI SEDIKIT PUN
` )
  }
handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(rules|peraturan)$/i

module.exports = handler
