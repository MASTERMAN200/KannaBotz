let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', '🎮 KannaBot',m)
}
handler.help = ['darkjokes']
handler.tags = ['internet','image']
handler.command = /^(darkjoke)$/i

module.exports = handler
