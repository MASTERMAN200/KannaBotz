let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "🌟 hy !\nSaya KannaBotz\n⤷ Pilih Menu Di Bawah Yaa\n\n\n🪀 Join Group WhatsApp\nhttps://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT\n\n🎮 • Join Discord\nhttps://discord.gg/WEJQjugTY7",
                        "description": "καɴɴα вσтᴢ ᵒᶠᶜ-",
                        "buttonText": "Click Here",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `⤷ Download Menu 📲↵♯❜`,
                                        "description": "\n[📲] Downloader Menu",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "⤷ Database Menu 📂↵♯❜",
                                        "description": "\n[📂] Database Menu",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "⤷ Button Menu 🔴↵♯❜",
                                        "description": "\n[🔴] Button Menu",
                                        "rowId": ".button"                 
                                    },{
                                	"title": "⤷ All Menu 🔖↵♯❜",
                                        "description": "\n[🔖] Allmenu",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "⤷ Jadibot Menu 🤖↵♯❜",
                                        "description": "\n[🤖] Jadibot Menu",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "⤷ Owner Menu 🪀↵♯❜",
                                        "description": "\n[🪀] Owner Menu",
                                        "rowId": ".ownermenu"                 
                                    },{
                                        "title": "⤷ Hentai Menu 🔞↵♯❜",
                                        "description": "\n[🔞] Hentai Menu",
                                        "rowId": ".hentaimenu"                 
                                    },{
                                        "title": "⤷ Absen Menu 📚↵♯❜",
                                        "description": "\n[📚] Absen Menu",
                                        "rowId": ".absenmenu"                 
                                    }, {
                                        "title": "⤷ Group Setting 📢↵♯❜",
                                        "description": "\n[📢] Group Settings",
                                        "rowId": ".groupset"
                                    }, {    
                                        "title": "⤷ Primbon Menu 🔮↵♯❜",
                                        "description": "\n[🔮] Primbon Menu",
                                        "rowId": ".primbonmenu"
                                        
                                    }, {       
                                        "title": "⤷ 18+ Menu 🔞↵♯❜",
                                        "description": "\n[🔞] 18+ Menu",
                                        "rowId": ".dewasamenu"
                                        
                                   }, {        
                                        "title": "⤷ Edukasi Menu 🏫↵♯❜",
                                        "description": "\n[🏫] Education Menu",
                                        "rowId": ".educationmenu"
                                        
                                   }, {             
                                        "title": "⤷ Edit Menu 🎬↵♯❜",
                                        "description": "\n[🎬] Editz Menu",
                                        "rowId": ".editormenu"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['simplemenu', 'listmenu']
handler.register = true
module.exports = handler