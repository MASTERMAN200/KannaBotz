let handler = m => m

handler = async function (m) {
    if (!DATABASE.data.settings[this.user.jid].antispam) return // antispam aktif?
    if (m.isBaileys && m.fromMe) return
    if (!m.message) return
    if (!m.isCommand) return
    if (DATABASE.data.users[m.sender].banned) return
    if (DATABASE.data.chats[m.chat].isBanned) return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 40) {
            if (this.spam[m.sender].count > 40) {
                DATABASE.data.users[m.sender].banned = true
                await this.sendButton(m.chat, '*Kamu dibanned karena spam!*', `${botol}`, '❦ Owner', ',owner', m)
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
}

module.exports = handler

let botol = global.botwm
