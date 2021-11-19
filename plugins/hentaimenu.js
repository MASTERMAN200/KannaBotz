let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "🔞❜♯'›⤷ NsfwMenu ⛓",
                        "description": "©KannaBot",
                        "buttonText": "Click Here",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `🔞 Random NsfwNeko`,
                                        "rowId": ".nsfwneko"
                                    }, {
                                       "title": `🔞 Random Hentai Gif`,
                                       "rowId": ".hentaigif"
                                    }, {
                                       "title": `🔞 Random Hentai`,
                                       "rowId": ".hentai"
                                    }, {
                                       "title": `🔞 Random Pussy`,
                                        "rowId": ".pussy"
                                    }, {
                                        "title": `🔞 Random Ass`,
                                        "rowId": ".ass"                               
                                    }, { 
                                        "title": `🔞 Random Manga`,
                                        "rowId": ".manga"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['hentaimenu']
module.exports = handler
handler.tags = ['jdhsnaj'] 
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler