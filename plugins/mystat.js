let handler = async (m, { conn }) => {
    let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiToxic, antiBadword, stiker, delete: _delete } = global.DATABASE._data.chats[m.chat]
    let { nsfw, backup, antispam, antitroli, groupOnly } = global.DATABASE.data.settings
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let botol = global.botwm

    let str = `
╭─⊰ 📈 Status
├› ⏱️ *Runtime* : ${uptime}
├› 🔋  *Battery* : ${conn.battery ? `${conn.battery.value}% ${conn.battery.Live ? '🔌  Charging...' : '⚡  Discharging'}` : 'Unknown'}
├› 💬 *Group* : ${groups.length} Grup
├› 💬 *Chat* : ${chats.length - groups.length} Chat Pribadi
├› 👥 *User* : ${Object.keys(global.DATABASE._data.users).length} User
├› 🤖 *Jadibot* : ${totaljadibot.length} Jadibot
├› 🚫 *UserBlock* : ${conn.blocklist.length} Terblock
├› 🗨️ *ChatBan* : ${Object.entries(global.DATABASE.data.chats).filter(chat => chat[1].isBanned).length} Chat Terbanned
├› 🚷 *UserBan* : ${Object.entries(global.DATABASE.data.users).filter(user => user[1].banned).length} Pengguna Terbanned
╰─────·····───

╭──⊰ ⚙️ Pengaturan
├ ${isBanned ? '✅' : '❌'} *Banned*
├ ${welcome ? '✅' : '❌'} *Welcome*
├ ${antiToxic ? '✅' : '❌'} *Anti Toxic*
├ ${antiLink ? '✅' : '❌'} *Anti Link*
├ ${backup ? '✅' : '❌'} *Auto Backup DB*
├ ${antiBadword ? '✅' : '❌'} *Anti Badword*
├ ${_delete ? '❌' : '✅'} *Anti Delete*
├ ${nsfw ? '✅' : '❌'} *Mode Nsfw*
├ ${detect ? '✅' : '❌'} *Detect*
├ ${stiker ? '✅' : '❌'} *Auto Jadi Stiker*
├ ${antispam ? '✅' : '❌'} *Anti Spam*
├ ${groupOnly ? '✅' : '❌'} *Group Only*
├ ${antitroli ? '✅' : '❌'} *Anti Troli*
╰─────·····───
    `.trim()
    conn.send2Button(m.chat, str, `${botol}`, `⋮☰ Back`, `.simplemenu`, `ϟ Ping`, `.ping`, m) 
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}