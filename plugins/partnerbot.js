let handler = function (m) {
  // this.sendContact(m.chat, '6283144570377', 'Raku Gans', m)
  conn.sendContact(m.chat, '62831433937630' , 'ιℓʋℓʋвσт', m)
  conn.reply(m.chat, `🍀 _Nih Partner ku Kak_ :`, m) 
}
handler.help = ['parnerbot']
handler.tags = ['info']

handler.command = /^(partnerbot)$/i

module.exports = handler
