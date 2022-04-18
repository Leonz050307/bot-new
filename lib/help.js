exports.wait = () => {
    return `Loading...`
}

exports.ok = () => {
    return `Done.`
}

exports.err = () => {
    return `Fitur Eror

Sedang Lapor Ke Owner`
}

exports.emptyMess = () => {
    return `Masukkan Pesan.️`
}

exports.ownerOnly = () => {
    return `Owner Only.`
}

exports.doneOwner = () => {
    return `Done Bos.`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `User Bukan Seorang Admin!`
}

exports.adminAlready = () => {
    return ` Tidak  Dapat Mem-promote User Yang Merupakan Admin!️`
}

exports.botNotAdmin = () => {
    return `Jadikan Bot Sebagai Admin`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima Kasih Telah Melapor, Laporanmu Akan Kami Segera Terima.`
}

exports.videoLimit = () => {
    return `Ukuran File Terlalu Besar!`
}

exports.notNum = (q) => {
    return `"${q}", Bukan Angka!`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Hi ${pushname} Selamat ${salam} ✨.*

_*🇬🇧 : List of features in this bot*_.
_*🇮🇩 : Daftar Fitur Yang Ada Di Bot Ini*_.
_*🇯🇵 : このボットの機能のリスト*_.

*[   PROFILE   ]*
_⫹⫺ Library : Baileys-Md_
_⫹⫺ Version : 1.1.0_
_⫹⫺ Language : Javascript_
_⫹⫺ Author : 𝙸 𝙰𝚖 𝙺𝙸𝚉𝙰𝙺𝙸𝚇𝙳_
_⫹⫺ Time : ${time}_

*[   MAIN   ]*
❒  _${prefix}afk [Reason]_
❒  _${prefix}menu / help_
❒  _${prefix}delete (Reply pesan bot!)_
❒  _${prefix}runtime_
❒  _${prefix}speed_
❒  _${prefix}kalkulator_

*[   INFO   ]*
❒  _${prefix}owner_
❒  _${prefix}rules_
❒  _${prefix}donate_

*[   COMMAND   ]*
❒  _${prefix}setcmd [Optional]_
❒  _${prefix}liscmd_
❒  _${prefix}delcmd [Reply Dash/Sticker]_
❒  _${prefix}lockcmd [Reply Dash/Sticker]_

*[   OWNER   ]*
❒  _> valuate_
❒  _$ exec_
❒  _${prefix}join [Link]_
❒  _${prefix}setppbot (tag/send image)_
❒  _${prefix}mode_
❒  _${prefix}self_
❒  _${prefix}public_
❒  _${prefix}setmenu img/gif_

*[   ANIME   ]*
❒  _${prefix}anime (query)_
❒  _${prefix}manga (query)_
❒  _${prefix}character (query)_
❒  _${prefix}waifu_
❒  _${prefix}cry_
❒  _${prefix}kill_
❒  _${prefix}hug_
❒  _${prefix}pat_
❒  _${prefix}lick_
❒  _${prefix}kiss_
❒  _${prefix}bite_
❒  _${prefix}yeet_
❒  _${prefix}neko_
❒  _${prefix}bully_
❒  _${prefix}bonk_
❒  _${prefix}wink_
❒  _${prefix}poke_
❒  _${prefix}nom_
❒  _${prefix}slap_
❒  _${prefix}smile_
❒  _${prefix}wave_
❒  _${prefix}awoo_
❒  _${prefix}blush_
❒  _${prefix}smug_
❒  _${prefix}glomp_
❒  _${prefix}happy_
❒  _${prefix}dance_
❒  _${prefix}cringe_
❒  _${prefix}cuddle_
❒  _${prefix}hingfive_
❒  _${prefix}megumin_
❒  _${prefix}handhold_

*[   GAME   ]*
❒  _${prefix}suit [Batu/Kertas/Gunting]_

*[   MISC   ]*
❒  _${prefix}film (query)_
❒  _${prefix}wattpad (query)_
❒  _${prefix}webtoons (query)_
❒  _${prefix}drakor (query)_
❒  _${prefix}pinterest (query)_

*[   SEARCH   ]*
❒  _${prefix}ytsearch [Query]_
❒  _${prefix}surah [Nama Surah]_
❒  _${prefix}lirik [Nama Lagu]_
❒  _${prefix}gimage [Query]__

*[   STALKER   ]*
❒  _${prefix}igstalk [Username]_
❒  _${prefix}ghstalk [Username]_

*[   NEWS   ]*
❒  _${prefix}covid_

*[   GROUP   ]*
❒  _${prefix}setwelcome [Optional]_
❒  _${prefix}delwelcome_
❒  _${prefix}cekwelcome_
❒  _${prefix}setleave [Optional]_
❒  _${prefix}delleave_
❒  _${prefix}cekleave_
❒  _${prefix}revoke_
❒  _${prefix}leave_
❒  _${prefix}group (open/close)_
❒  _${prefix}tagall (info)_
❒  _${prefix}hidetag (text)_

*[   ISLAMI   ]*
❒  _${prefix}randomsurah_

*[   FUN   ]*
❒  _${prefix}namaninja_
❒  _${prefix}darkmeme_

*[   TOOLS   ]*
❒  _${prefix}toimg (Tag sticker)_
❒  _${prefix}sticker (Reply img/video)_
❒  _${prefix}stickerwm (Reply img/video)_
❒  _${prefix}take (tag sticker)_
❒  _${prefix}togif (Tag stickergif)_
❒  _${prefix}tovideo (Tag stickergif)_
❒  _${prefix}tourl (Reply img/video)_

*[   DOWNLOADER   ]*
❒  _${prefix}tiktok [Link]_
❒  _${prefix}tiktoknowm [Link]_
❒  _${prefix}ttnowm (Request)_
❒  _${prefix}ttaudio (Request)_
❒  _${prefix}tiktokaudio [Link]_
❒  _${prefix}joox [Query]_
❒  _${prefix}play [Query]_
❒  _${prefix}playmp3 [Query]_
❒  _${prefix}playmp4 [Query]_
❒  _${prefix}ytmp3 [Link]_
❒  _${prefix}ytmp4 [Link]_
❒  _${prefix}facebook [Link]_
❒  _${prefix}twitter [Link]_
❒  _${prefix}instagram [Link]_`
}

exports.sc = (prefix) => {
    return ` *── 「 SCRIPT AND BASE 」 ──*

 •Rashid (Base) : https://github.com/rashidsiregar28/chikabot
 •Rama_Agung (Numpang Edit) : https://youtube.com/c/LeonGanz`
}

exports.rules = (prefix) => {
    return `*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: SOFT BLOCK*

3. Bot di kick dari group.
Sanksi: *Tidak Bisa Masuk Lagi*

4. Gabisa makek? Gausah Salahin Bot
Sanksi: *Bodoh*

5. Mau Donate dan Sewa Bot Bisa Chat Ke Owner Ya
Sanksi: *Dapet Diskon Gede Kok*

6. Masuk Group Bot Official : https://chat.whatsapp.com/HHjPtKIjkzb1ud0QtrkbQH
Sanksi: *Menjadi Wibu Elite*

`
}

exports.tos = (ownerNumber, prefix) => {
    return `*── 「 DONATE 」 ──*

_Kalian Bisa Dukung Bot Lewat Donate Ke :_

 _》Dana : 085608625102_
 _》Gopay : 085608625102_
 _》Pulsa : 085608625102 ( Indosat )_

_Donate Kalian Sangat Berarti._

_Contact person Owner:_
_wa.me/6285608625102_`
}

exports.contri = () => {
return` 
BIG THANKS TO :
  » Allah Swt.
  » Nabi Muhammad Saw.
  » Orang Tua
  » All Teams
  » Rama/Leon
  » Dika Ardnt.
  » KiZakiXD
  » Rashid
`
}
