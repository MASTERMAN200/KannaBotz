let handler = async m => m.reply(`
╭ *◇ Group Official ◇*
├╯🍀 Group 1 :
https://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT
╰╮ © KannaBot
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
