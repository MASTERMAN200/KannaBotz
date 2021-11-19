let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
	
	let { lastberburu, lastbansos, lastadventure, lastfishing, lastwar, lastduel, lastmining, lastdungeon, lastclaim, lastweekly, lastmonthly } = global.DATABASE._data.users[m.sender]
	
    let healt = global.DATABASE._data.users[m.sender].healt
    let stamina = global.DATABASE._data.users[m.sender].stamina
    let armor = global.DATABASE._data.users[m.sender].armor 
    let sword = global.DATABASE._data.users[m.sender].sword
    let _sword = global.DATABASE._data.users[m.sender].sworddurability
    let warn = global.DATABASE._data.users[m.sender].warn
    let pancing = global.DATABASE._data.users[m.sender].pancing
    let role = global.DATABASE._data.users[m.sender].role
    let pickaxe = global.DATABASE._data.users[m.sender].pickaxe

    let psepick = global.DATABASE._data.users[m.sender].psepick
    let psenjata = global.DATABASE._data.users[m.sender].psenjata

    let ikan = global.DATABASE._data.users[m.sender].ikan
    let nila = global.DATABASE._data.users[m.sender].nila
    let bawal= global.DATABASE._data.users[m.sender].bawal
    let lele = global.DATABASE._data.users[m.sender].lele
    let udangb= global.DATABASE._data.users[m.sender].udang

    let apel = global.DATABASE._data.users[m.sender].apel
    let ayamg = global.DATABASE._data.users[m.sender].ayamg
    let ayamb = global.DATABASE._data.users[m.sender].ayamb
    let sapir = global.DATABASE._data.users[m.sender].sapir
    let ssapi = global.DATABASE._data.users[m.sender].ssapi
    let kayu = global.DATABASE._data.users[m.sender].kayu
    let string = global.DATABASE._data.users[m.sender].string
    let emas = global.DATABASE._data.users[m.sender].emas
    let besi = global.DATABASE._data.users[m.sender].iron
    let batu = global.DATABASE._data.users[m.sender].batu
    let sapi = global.DATABASE._data.users[m.sender].sapi
    let ayam = global.DATABASE._data.users[m.sender].ayam
    let babi = global.DATABASE._data.users[m.sender].babi
    let banteng = global.DATABASE._data.users[m.sender].banteng
    let pet = global.DATABASE._data.users[m.sender].pet
    let kucing = global.DATABASE._data.users[m.sender].kucing
    let _kucing = global.DATABASE._data.users[m.sender].anakkucing
    let rubah = global.DATABASE._data.users[m.sender].rubah
    let _rubah = global.DATABASE._data.users[m.sender].anakrubah
    let kuda = global.DATABASE._data.users[m.sender].kuda
    let _kuda = global.DATABASE._data.users[m.sender].anakkuda
    let diamond = global.DATABASE._data.users[m.sender].diamond
    let potion = global.DATABASE._data.users[m.sender].potion
    let common = global.DATABASE._data.users[m.sender].common
    let makananpet = global.DATABASE._data.users[m.sender].makananpet
    let uncommon = global.DATABASE._data.users[m.sender].uncommon
    let mythic = global.DATABASE._data.users[m.sender].mythic
    let legendary = global.DATABASE._data.users[m.sender].legendary
    let level = global.DATABASE._data.users[m.sender].level
    let money = global.DATABASE._data.users[m.sender].money
    let exp = global.DATABASE._data.users[m.sender].exp
    let limit = global.DATABASE._data.users[m.sender].limit
    let sampah = global.DATABASE._data.users[m.sender].sampah
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedgold = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].gold - a[1].gold)
    let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersgold = sortedgold.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `📥Inventory *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\n
❤️️Health: *${healt}*
🍸Stamina: *${stamina}*
🥼Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*
⚔️Sword: *${sword == 0 ? 'Tidak punya' : '' || sword == 1 ? 'wooden sword' : '' || sword == 2 ? 'Iron sword' : '' || sword == 3 ? 'Gold sword' : '' || sword == 4 ? 'Diamond sword' : '' || sword > 0 && sword < 5 ? `Ketahanan (*${_sword}* / *${sword *100}*)` : '' || sword == 5 ? '*Netherite Sword*' : ''}*
⛏️Pickaxe: *${pickaxe == 0 ? 'Tidak Punya' : '' || pickaxe == 1 ? 'wooden pickaxe' : '' || pickaxe == 2 ? 'Iron pickaxe' : '' || pickaxe == 3 ? 'Gold pickaxe' : '' || pickaxe == 4 ? 'Diamond pickaxe' : '' || pickaxe == 5 ? 'Netherite pickaxe' : ''}*
🎣Pancingan: *${ pancing == 0 ? 'Tidak punya' : '' || pancing == 1 ? 'kail pancing kayu' : '' }*

💹Money: *${money} 💲*
📊Level: *${level}*
✨Exp: *${exp}*
📍Role: *${role}*
🎟️Limit: *${limit}*

*🐾 Hewan dikandang:*
🐔 *Ayam:* ${ayam}
🐄 *Sapi:* ${sapi}
🐖 *Babi:* ${babi}
🐂 *Banteng:* ${banteng}
🏹 *Total Hewan:* ${ ayam + sapi + babi + banteng } tangkapan
🥢 Bisa kamu masak */masak ayamb*
_📌 Cek hewan buruan mu di *!kandang*_

*🏝️Aquarium :*
🐟ikan: ${ikan}
🐟lele: ${lele}
🐡bawal: ${bawal}
🐟Nila: ${nila}
_⊰◈▸ *Total Ikan:* ${nila + bawal + ikan + lele + psepick + psenjata }_

*📥 Inventory*
💎Diamond: *${diamond}*
🥤Potion: *${potion}*
🗑️Sampah/Trash: *${sampah}*
🪵 Kayu: ${kayu}
🕸️String: ${string}
🪙 Gold: ${emas}
⛓ Iron: ${besi}
🪨 Batu: ${batu}

*Food 🥪*
🥩 FoodPet : ${makananpet}
🍎 apel : ${apel}
🍗ayam bakar: ${ayamb}
🍖ayam goreng: ${ayamg}
🍖Rendang Sapi : ${sapir}
🍢steak sapi: ${ssapi}

🎒 Total inv: *${diamond + potion + sampah + makananpet + apel + ayamb + ayamg + sapir + ssapi }* item\n
*Crate 🧰*
📦Common: *${common}*
🛍️Uncommon: *${uncommon}*
🎁Mythic: *${mythic}*
🧰Legendary: *${legendary}*
📫Pet: *${pet}*
✉️Chest Weapons epick:${psepick} item
✉️Chest Weapons: ${psenjata} item\n
*Pet 🐾*
🐴Kuda/horse: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
🦊Rubah/Fox: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
🐱Kucing/Cat: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*\n\n
*📈 Proges*\n
╭────────────────
│📊️Level *${level}* To Level *${level}*
│✨️Exp *${exp}* -> *${max}*
╰────────────────
╭────────────────
│🦊Rubah/Fox ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐱Kucing/Cat ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐴Kuda/horse ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────\n\n

_*🕒 Cooldown*_
Last Berburu : ${lastberburu > 0 ? '❌' + new Date(lastberburu) : '✅'}
Last Memancing : ${lastfishing > 0 ? '❌' +  new Date(lastfishing) : '✅'}
Last Adventure : ${lastadventure > 0 ? '❌' + new Date(lastadventure) : '✅'}
Last Duel : ${lastduel > 0 ? '❌' + new Date(lastduel) : '✅'}
Last War : ${lastwar > 0 ? '❌' + new Date(lastwar) : '✅'}
Last Dungeon: ${lastdungeon > 0 ? '❌' + new Date(lastdungeon) : '✅'}
Last Mining: ${lastmining > 0 ? '❌' + new Date(lastmining) : '✅'}
Last Bansos : ${lastbansos > 0 ? '❌' + new Date(lastbansos) : '✅'}
Last Claim: ${lastclaim > 0 ? '❌' + new Date(lastclaim) : '✅'}
Last Weekly: ${lastweekly > 0 ? '❌' + new Date(lastweekly) : '✅'}
Last Monthly: ${lastmonthly > 0 ? '❌' + new Date(lastmonthly) : '✅'}


*🎖️Achievement*
1.Top 📊level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
3.Top 💹Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
2.Top 🪙Gold *${usersgold.indexOf(m.sender) + 1}* dari *${usersgold.length}*
4.Top 💎Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
5.Top 🥤Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
6.Top 📦Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
7.Top 🛍️Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
8.Top 🎁Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
9.Top 🧰Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
10.Top 🗑️Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
\n${readMore}
⚠️Warn: *${warn}*
❎Banned: *No*
`.trim()
    conn.send2Button(m.chat, str, `${botol}`, `⋮☰ Back`, `.menu`, `Shop`, `.shop`, m)
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|level(ing)?|myinv|e?xp)$/i
handler.register = false
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

let botol = global.botwm