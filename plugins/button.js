let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "╭━━━━━━━━━━━━━━━━┈\n│       *KANNA BOT*\n└┬──────────┈──┦\n╭┼------------·····------------\n││ *[❗] Harap patuhi !*\n│┝▸ Dilarang Spam Command Bot\n│┝▸ Dilarang Call Bot\n│├─────────···\n││ 🎋 *Restapi :*\n││ ▸ https://restapi-kannabot.herokuapp.com/\n│╰────────────┈⊰\n│ *Owner :* Letta\n│ *Author :* Nurutomo\n╰━━━━━━━━━━━━━━━━┈⊰",
                        "description": "©Ƙαɴɴαвσт ᵒᶠᶠⁱᶜⁱᵃˡ-",
                        "buttonText": ".,๑ 𝗠𝗘𝗡𝗨 ๑,.",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `[🧾] Semua  Perintah`,
                                        "description": "Menampilkan Semua Fitur",
                                        "rowId": ".allmenu"
                                    },{
                                        "title": "[🗃️] Database",
                                        "description": "Simpan Sesuatu Di Bot",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "[🎯] Game",
                                        "description": "Main Berbagai Game Di Bot !",
                                        "rowId": ".gamemenu"                 
                                    },{
                                        "title": "[📲] Downloader",
                                        "description": "Download Sesuatu Di Bot",
                                        "rowId": ".downloadmenu"                 
                                    },{
                                        "title": "[🤖] JadiBot",
                                        "description": "Jadi Bot",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "[🎬] Editor",
                                        "description": "Edit Sesuatu Di Bot !",
                                        "rowId": ".editormenu"                 
                                    },{
                                        "title": "[💻] Search",
                                        "description": "Cari Sesuatu Di Bot",
                                        "rowId": ".searchmenu"                 
                                    },{
                                        "title": "[🐚] Kerang",
                                        "description": "Kerang Ajaib !!",
                                        "rowId": ".kerangmenu"                 
                                    }, {
                                        "title": "[🏢] Group",
                                        "description": "Atur Group Mu",
                                        "rowId": ".grupmenu"
                                    }, {    
                                        "title": "[🔮] Primbon",
                                        "description": "Ramal Diri Mu !",
                                        "rowId": ".primbonmenu"
                                        
                                    }, {       
                                        "title": "[🔞] Nsfw",
                                        "description": "Menu Bokep",
                                        "rowId": ".dewasamenu"
                                       
                                    }, {        
                                        "title": "[🏫] Edukasi",
                                        "description": "Menu Edukasi",
                                        "rowId": ".educationmenu"
                                        
                                    }, {             
                                        "title": "[🧪] Owner",
                                        "description": "Menu Khusus Owner",
                                        "rowId": ".ownermenu"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler