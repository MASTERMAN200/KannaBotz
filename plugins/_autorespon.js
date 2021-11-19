let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let chat = DATABASE.data.chat
    this.lastSetStatus = this.lastSetStatus ? this.lastSetStatus : {}
    let { isBanned } = DATABASE.data.chats[m.chat]
    let { banned } = DATABASE.data.users[m.sender]
    
    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'KannaBotz tidak aktif' : banned ? 'kamu dibanned' : 'A,ada apa kakk ? (＾▽＾)',
                'K a n n a  B o t z',
                isBanned ? '♎︎ • UNBAN ༅' : banned ? '❦ Owner' : '⋮☰  Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.menu',
                m.isGroup ? '✢ Donasi' : isBanned ? '♎︎ UNBAN' : '✢ DONASI',
                m.isGroup ? '.donasi' : isBanned ? '.unban' : '.donasi')
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `╭› *◇ Undang Bot ke Grup ◇*
├ 7 Hari / Rp 1,000
├ 14 Hari / Rp 5,000
├ 30 Hari / Rp 10.000
╰╮
››├🍀 Atau Masuk group KannaBotz Offiial
╭╯
├https://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT
╰╮
`.trim(), '© καɴɴα вσтᴢ', '🌹 Owner', '.owner', { contextInfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }
    if (!(this.lastSetStatus) || ! isNumber(this.lastSetStatus)) this.lastSetStatus = 0
    if (new Date - this.lastSetStatus > 10000) {
      let package = JSON.perse(await fs.promises.readFile(path.joim(__dirname, '../ package.json')).catch(_=> '{}'))
      let npmname = package.name
      let npmdesc = package.description
      let version = package.version
      let github = package.homepage ? package.hompage.url || package.hompage : '[unknown github url]'
      let _uptime = process.uptime() * 1000
      let uptime = clockString(_uptime)
      //let _muptime = await muptime()
      let random = [
`✧ Whatsapp Bot │⊰ By ίℓʋɭų ǫғғιcιαℓ あ │◟καɴɴα вσт◞│⋆ ada pertanyaan chat /owner`
`⎋ Aktif Selama ${uptime} │ ✘ Mode : ${global.opts['self'] ? 'Self' : 'Publik'}`
`Https://github.com/bochilgaming/games-wabot/`
      ]
       await this.setStatus(pickRandom(random)).catch(_=>_)
       this.lastSetStatus = new Date * 1
}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(arr) {
    return arr[Math.round(arr.length * Math.random())]
}

function isNumber(x) {
  x = parselnt(x)
  return typeof x == 'number' && !isNaN(x)
}

/*
 async function muptime() {
 let _muptime
 if (process.send) {
    process.send('uptime')
    _muptime = await new Promise(resolve => {
      process.once('message', resolve)
      setTimeout(resolve, 1000)
    }) * 1000
  }
   return clockString(_muptime)
}
*/