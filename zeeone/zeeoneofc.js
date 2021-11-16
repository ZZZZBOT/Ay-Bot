const petik = '```'
const help = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)=> {
	return`┌⸙⋆ *INDONESIA TIME*
│ *WIB :* ${timuu}
│ *WITA :* ${wita}
└⸙⋆ *WIT :* ${wit}
                          
┌⸙⋆ *TODAY*
│  ${ucapannya2}
│ *Jam :* ${timuu}
│ *Hari :* ${thisDay}
└⸙⋆ *Tanggal :* ${ini_tanggal}

┌⸙⋆ *DEVICE*
│ *Whatsapp :* ${wa_version}
│ *Merk HP :* ${device_manufacturer}
│ *Versi HP :* ${device_model}
│ *Versi OS :* ${os_version}
│ *RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│ *MCC :* ${mcc}
└⸙⋆ *MNC :* ${mnc}

┌─⸙⋆「 *BOT INFO* 」
│ *Owner :* ${ownername}
│ *Mode :* ${status}
│ *Prefix :* ${prefix}
│ *Total Hit :* ${hit_today.length}
│ *Personal Chat :* ${totalchat.length - ini_gcchat.lenght}
│ *Total All Chat :* ${totalchat.length}
│ *Group Chat :* ${ini_gcchat}
│ *Browser :* Chrome
│ *Server :* Baileys
│ *Version :* 3.5.2
│ *Speed :* ${latensiii} 
└⸙⋆ ${tekss}


┌⸙⋆ *LIST MENU* ⸙⋆
│
🍃⋆Allmenu 
🍃⋆Convertmenu
🍃⋆Asupanmenu
🍃⋆Downloadmenu
🍃⋆Funmenu
🍃⋆Makermenu
🍃⋆Othermenu
🍃⋆Ownermenu
🍃⋆Storagemenu
🍃⋆Tagmenu
🍃⋆Upmenu
🍃⋆Set_sticker_cmd
🍃⋆Gacha_cecan
🍃⋆Telegram_sticker
└⸙⋆ *Image_effect

┌⸙⋆ *ABOUT* ⸙⋆
│
🌻⋆Source
🌻⋆ThanksTo
🌻⋆Group_support
└⸙⋆ *Ownerbot

⸙⋆ _Creator Miku © 2K21_ ⸙⋆
`
}
const convert = (prefix) => {
	return`┌⸙⋆ *CONVERT MENU* ⸙⋆
│
🌹⋆${prefix}toimg
🌹⋆${prefix}tomp3
🌹⋆${prefix}tomp4
🌹⋆${prefix}slow
🌹⋆${prefix}tupai
🌹⋆${prefix}fast
🌹⋆${prefix}reverse
└⸙⋆ ${prefix}tourl
`
}
const download = (prefix) => {
	return`┌⸙⋆ *DOWNLOAD MENU* ⸙⋆
│
🌹⋆${prefix}ytsearch _query_
🌹⋆${prefix}igstalk _username_
🌹⋆${prefix}ghstalk _username_
🌹⋆${prefix}play _query_
🌹⋆${prefix}playmp4 _query_
🌹⋆${prefix}video _query_
🌹⋆${prefix}ytmp3 _link_
🌹⋆${prefix}ytmp4 _link_
🌹⋆${prefix}ig _link_
🌹⋆${prefix}igphoto _link_
🌹⋆${prefix}igvideo _link_
🌹⋆${prefix}igtv _link_
🌹⋆${prefix}igreels _link_
🌹⋆${prefix}twitter _link_
🌹⋆${prefix}tiktokwm _link_
🌹⋆${prefix}tiktoknowm _link_
🌹⋆${prefix}tiktokaudio _link_
🌹⋆${prefix}fb _link_
🌹⋆${prefix}brainly _query_
🌹⋆${prefix}image _query_
🌹⋆${prefix}pinterest _query_
🌹⋆${prefix}pinterest2 _query_
🌹⋆${prefix}playstore _query_
🌹⋆${prefix}gcwa _query_
🌹⋆${prefix}lirik _query_
🌹⋆${prefix}komiku _query_
🌹⋆${prefix}otaku _query_
└⸙⋆ ${prefix}anime _random_
`
}
const allmenu = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)  => {
	return`⸙⋆───「 *Miku* 」───⸙⋆
     
┌⸙⋆ *INDONESIA TIME*
│ *WIB :* ${timuu}
│ *WITA :* ${wita}
└⸙⋆ *WIT :* ${wit}
                          
┌⸙⋆ *TODAY*
│  ${ucapannya2}
│ *Jam :* ${timuu}
│ *Hari :* ${thisDay}
└⸙⋆ *Tanggal :* ${ini_tanggal}

┌⸙⋆ *DEVICE*
│ *Whatsapp :* ${wa_version}
│ *Merk HP :* ${device_manufacturer}
│ *Versi HP :* ${device_model}
│ *Versi OS :* ${os_version}
│ *RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│ *MCC :* ${mcc}
└⸙⋆ *MNC :* ${mnc}

┌─⸙⋆「 *BOT INFO* 」
│ *Mode :* ${status}
│ *Prefix :* ${prefix}
│ *Total Hit :* ${hit_today.length}
│ *Personal Chat :* ${totalchat.length - ini_gcchat.lenght}
│ *Total All Chat :* ${totalchat.length}
│ *Group Chat :* ${ini_gcchat}
│ *Browser :* Chrome
│ *Server :* Baileys
│ *Version :* 3.5.2
│ *Speed :* ${latensiii} 
└⸙⋆ ${tekss}

┌─⸙⋆「 *CONVERT MENU* 」
│
🌹⋆${prefix}toimg
🌹⋆${prefix}tomp3
🌹⋆${prefix}tomp4
🌹⋆${prefix}slow
🌹⋆${prefix}tupai
🌹⋆${prefix}fast
🌹⋆${prefix}reverse
🌹⋆${prefix}tourl
│
⸙⃝⋆ 「 *DOWNLOAD MENU* 」
│
🌹⋆${prefix}ytsearch _query_
🌹⋆${prefix}igstalk _username_
🌹⋆${prefix}ghstalk _username_
🌹⋆${prefix}play _query_
🌹⋆${prefix}playmp4 _query_
🌹⋆${prefix}video _query_
🌹⋆${prefix}ytmp3 _link_
🌹⋆${prefix}ytmp4 _link_
🌹⋆${prefix}ig _link_
🌹⋆${prefix}igphoto _link_
🌹⋆${prefix}igvideo _link_
🌹⋆${prefix}igtv _link_
🌹⋆${prefix}igreels _link_
🌹⋆${prefix}twitter _link_
🌹⋆${prefix}tiktokwm _link_
🌹⋆${prefix}tiktoknowm _link_
🌹⋆${prefix}tiktokaudio _link_
🌹⋆${prefix}fb _link_
🌹⋆${prefix}brainly _query_
🌹⋆${prefix}image _query_
🌹⋆${prefix}pinterest _query_
🌹⋆${prefix}pinterest2 _query_
🌹⋆${prefix}playstore _query_
🌹⋆${prefix}gcwa _query_
🌹⋆${prefix}lirik _query_
🌹⋆${prefix}komiku _query_
🌹⋆${prefix}anime _random_
│
⸙⃝⋆ 「 *FUN MENU* 」
│
🌹⋆${prefix}jelajah
🌹⋆${prefix}adventure
🌹⋆${prefix}nambang
🌹⋆${prefix}nebang
🌹⋆${prefix}mancing
🌹⋆${prefix}lebur
🌹⋆${prefix}jualikan
🌹⋆${prefix}jualcoal
🌹⋆${prefix}jualstone
🌹⋆${prefix}jualingot
🌹⋆${prefix}jualkayu
🌹⋆${prefix}slot
🌹⋆${prefix}inventory
🌹⋆${prefix}dompet
🌹⋆${prefix}suit
🌹⋆${prefix}judi
🌹⋆${prefix}fitnah
🌹⋆${prefix}absen
🌹⋆${prefix}absensi
🌹⋆${prefix}tebakgambar
🌹⋆${prefix}caklontong
🌹⋆${prefix}family100
🌹⋆${prefix}tebakanime
🌹⋆${prefix}suit
🌹⋆${prefix}fitnahpc text|balasan
🌹⋆${prefix}kontak 62xxx|text
🌹⋆${prefix}tictactoe @user
🌹⋆${prefix}delttt
🌹⋆${prefix}voting @user|reason|time
🌹⋆${prefix}delvote
🌹⋆${prefix}jadibot
🌹⋆${prefix}stopjadibot
🌹⋆${prefix}listbot
│
⸙⃝⋆ 「 *MAKER MENU* 」
│
🌹⋆${prefix}sticker
🌹⋆${prefix}smeme atas|bawah
🌹⋆${prefix}ktpmaker
🌹⋆${prefix}attp
🌹⋆${prefix}ttp
🌹⋆${prefix}ttp1
🌹⋆${prefix}ttp2
🌹⋆${prefix}ttp3
🌹⋆${prefix}ttp4
🌹⋆${prefix}swm author|packname
🌹⋆${prefix}take author|packname
🌹⋆${prefix}fdeface
🌹⋆${prefix}amongus 
🌹⋆${prefix}tweettrump text
🌹⋆${prefix}cmm text
🌹⋆${prefix}kanna text
🌹⋆${prefix}tahta text
🌹⋆${prefix}neon2 text
🌹⋆${prefix}wall text
🌹⋆${prefix}wolf text
🌹⋆${prefix}tfire text
🌹⋆${prefix}ytgold text
🌹⋆${prefix}ytsilver text
🌹⋆${prefix}t3d text
🌹⋆${prefix}logoa text|text
🌹⋆${prefix}pornhub text|text
🌹⋆${prefix}marvel text|text
🌹⋆${prefix}leavest text
🌹⋆${prefix}phcoment text|text
🌹⋆${prefix}nulis text
🌹⋆${prefix}nulis2
🌹⋆${prefix}emoji 👼
🌹⋆${prefix}naruto text
🌹⋆${prefix}blueneon text
🌹⋆${prefix}matrix text
🌹⋆${prefix}greenneon text
🌹⋆${prefix}dropwater text|text
🌹⋆${prefix}wolflogo text
🌹⋆${prefix}flowertext text
🌹⋆${prefix}crosslogo text
🌹⋆${prefix}silktext text
🌹⋆${prefix}flametext text
🌹⋆${prefix}glowtext text
🌹⋆${prefix}smoketext text
🌹⋆${prefix}pubglogo text|text
🌹⋆${prefix}skytext text
🌹⋆${prefix}cslogo text
│
⸙⃝⋆ 「 *IMAGE EFFECT* 」
│
🌹⋆${prefix}trigger
🌹⋆${prefix}gay
🌹⋆${prefix}glass
🌹⋆${prefix}passed
🌹⋆${prefix}jail
🌹⋆${prefix}comrade
🌹⋆${prefix}hijau
🌹⋆${prefix}biru
🌹⋆${prefix}greyscale
🌹⋆${prefix}invert
🌹⋆${prefix}invert_greyscale
🌹⋆${prefix}red
🌹⋆${prefix}blurple
🌹⋆${prefix}blurple2
🌹⋆${prefix}wasted
🌹⋆${prefix}pelangi
🌹⋆${prefix}sepia
🌹⋆${prefix}wanted
🌹⋆${prefix}utatoo
🌹⋆${prefix}unsharpen
🌹⋆${prefix}thanos
🌹⋆${prefix}sniper
🌹⋆${prefix}sharpen
🌹⋆${prefix}scary
🌹⋆${prefix}rip
🌹⋆${prefix}rejected
🌹⋆${prefix}redple
🌹⋆${prefix}posterize
🌹⋆${prefix}ps4
🌹⋆${prefix}pixelize
🌹⋆${prefix}missionpassed
🌹⋆${prefix}moustache
🌹⋆${prefix}lookwhatkarenhave
🌹⋆${prefix}instagram
🌹⋆${prefix}glitch
🌹⋆${prefix}frame
🌹⋆${prefix}fire
🌹⋆${prefix}distort
🌹⋆${prefix}dictator
🌹⋆${prefix}deepfry
🌹⋆${prefix}ddungeon
🌹⋆${prefix}circle
🌹⋆${prefix}challenger
🌹⋆${prefix}burn
🌹⋆${prefix}brazzers
🌹⋆${prefix}beautiful
│
⸙⃝⋆ 「 *GROUP MENU* 」
│
🌹⋆${prefix}add 62***
🌹⋆${prefix}kick _@user_
🌹⋆${prefix}radd _reply pesan @user_
🌹⋆${prefix}rkick _reply pesan @user_
🌹⋆${prefix}ping
🌹⋆${prefix}nsfw _on / off_
🌹⋆${prefix}antilink _on / off_
🌹⋆${prefix}get _link_
🌹⋆${prefix}getpp _@user_
🌹⋆${prefix}getname _reply_
🌹⋆${prefix}size _reply media_
🌹⋆${prefix}colongsw _reply sw_
🌹⋆${prefix}getbio _@user_
🌹⋆${prefix}tagall
🌹⋆${prefix}listonline
🌹⋆${prefix}caripesan query
🌹⋆${prefix}caripesan2 _query_
🌹⋆${prefix}searchmsg _query|total_
🌹⋆${prefix}sider _reply pesan bot_
🌹⋆${prefix}del _reply pesan bot_
🌹⋆${prefix}q _reply pesan_
🌹⋆${prefix}afk _reason_
🌹⋆${prefix}getsider _reply pesan bot_
🌹⋆${prefix}promoteall
🌹⋆${prefix}ppcouple
🌹⋆${prefix}setname
🌹⋆${prefix}revoke
🌹⋆${prefix}setdesk
🌹⋆${prefix}spam text|jumlah
🌹⋆${prefix}demoteall
🌹⋆${prefix}admin
🌹⋆${prefix}listpc
🌹⋆${prefix}listgroup
🌹⋆${prefix}hentai
🌹⋆${prefix}jadian
🌹⋆${prefix}trapnime
🌹⋆${prefix}sewa add/del waktu
🌹⋆${prefix}listsewa
🌹⋆${prefix}ceksewa
🌹⋆${prefix}premium add 62xxx waktu
🌹⋆${prefix}cekpremium
🌹⋆${prefix}listprem
🌹⋆${prefix}belipremium
🌹⋆${prefix}sewabot
🌹⋆${prefix}verify
🌹⋆${prefix}limit
🌹⋆${prefix}profile
🌹⋆${prefix}buylimit
🌹⋆${prefix}buyglimit
🌹⋆${prefix}awoo
🌹⋆${prefix}megumin
│
⸙⃝⋆ 「 *OWNER MENU* 」
│
🌹⋆${prefix}off
🌹⋆${prefix}on
🌹⋆${prefix}buggc
🌹⋆${prefix}bc
🌹⋆${prefix}bcimage
🌹⋆${prefix}bcgif
🌹⋆${prefix}bcvideo
🌹⋆${prefix}bcaudio
🌹⋆${prefix}bcsticker
🌹⋆${prefix}virus1
🌹⋆${prefix}virus2
🌹⋆${prefix}virus3
🌹⋆${prefix}virus4
🌹⋆${prefix}ban
🌹⋆${prefix}unban
🌹⋆${prefix}block
🌹⋆${prefix}unblock
🌹⋆${prefix}status
🌹⋆${prefix}clearall
🌹⋆${prefix}self
🌹⋆${prefix}public
🌹⋆${prefix}join
🌹⋆${prefix}leave
🌹⋆${prefix}clearall
🌹⋆${prefix}readall
🌹⋆${prefix}unreadall
🌹⋆${prefix}archive
🌹⋆${prefix}unarchive
🌹⋆${prefix}pin
🌹⋆${prefix}delthischat
🌹⋆${prefix}unpin
🌹⋆${prefix}autoread <query> on / off
🌹⋆${prefix}antibug on / off
🌹⋆${prefix}antidelete on / off
🌹⋆${prefix}anticall on / off
🌹⋆${prefix}autoketik on / off
🌹⋆${prefix}autovn on / off
🌹⋆${prefix}antihidetag on / off
🌹⋆${prefix}autobio on / off
🌹⋆${prefix}register on / off
🌹⋆${prefix}autorespon on / off
🌹⋆${prefix}setthumb
🌹⋆${prefix}settarget
🌹⋆${prefix}setfakeimg
🌹⋆${prefix}setreply
🌹⋆${prefix}term _code_
🌹⋆x or > _code_
🌹⋆$  _termux code_
🌹⋆=>  _eval async_
│
⸙⃝⋆ 「 *SET STC CMD* 」
│
🌹⋆${prefix}set_stc_menu _<query>_
🌹⋆${prefix}set_stc_ping _<query>_
🌹⋆${prefix}set_stc_gclose _<query>_
🌹⋆${prefix}set_stc_gopen _<query>_
🌹⋆${prefix}set_stc_itos _<query>_
🌹⋆${prefix}set_stc_toimg _<query>_
🌹⋆${prefix}set_stc_self _<query>_
🌹⋆${prefix}set_stc_public _<query>_
│
⸙⃝⋆ 「 *STORAGE  MENU* 」
│
🌹⋆${prefix}addstik 
🌹⋆${prefix}addimg 
🌹⋆${prefix}addvid 
🌹⋆${prefix}addvn   
🌹⋆${prefix}liststick
🌹⋆${prefix}listimg
🌹⋆${prefix}listvid
🌹⋆${prefix}listvn
🌹⋆${prefix}addrespon
🌹⋆${prefix}delrespon
🌹⋆${prefix}listrespon
│
⸙⃝⋆ 「 *TAG  MENU* 」
│
🌹⋆${prefix}hidetag
🌹⋆${prefix}kontag
🌹⋆${prefix}sticktag
🌹⋆${prefix}totag
│
⸙⃝⋆ 「 *UP ESWE* 」
│
🌹⋆${prefix}upswteks
🌹⋆${prefix}upswimage
🌹⋆${prefix}upswvideo
│
⸙⃝⋆ 「 *NSFW & SFW* 」
│
🌹⋆${prefix}ahegao
🌹⋆${prefix}ass
🌹⋆${prefix}bdsm
🌹⋆${prefix}blowjob
🌹⋆${prefix}blowjob2
🌹⋆${prefix}cuckold
🌹⋆${prefix}cum
🌹⋆${prefix}ero
🌹⋆${prefix}femdom
🌹⋆${prefix}foot
🌹⋆${prefix}gangbang
🌹⋆${prefix}glasses
🌹⋆${prefix}jahy
🌹⋆${prefix}manga
🌹⋆${prefix}masturbation
🌹⋆${prefix}neko
🌹⋆${prefix}orgy
🌹⋆${prefix}panties
🌹⋆${prefix}pussy
🌹⋆${prefix}tentacles
🌹⋆${prefix}thighs
🌹⋆${prefix}yuri
🌹⋆${prefix}feet
🌹⋆${prefix}lewdkemo
🌹⋆${prefix}woof
🌹⋆${prefix}gasm
🌹⋆${prefix}solo
🌹⋆${prefix}8ball
🌹⋆${prefix}goose
🌹⋆${prefix}avatar
🌹⋆${prefix}hololewd
🌹⋆${prefix}gecg
🌹⋆${prefix}holo
🌹⋆${prefix}fox_girl
🌹⋆${prefix}tits
🌹⋆${prefix}eroyuri
🌹⋆${prefix}holoyero
🌹⋆${prefix}lizard
🌹⋆${prefix}keta
🌹⋆${prefix}eron
🌹⋆${prefix}erok
🌹⋆${prefix}kemonomimi
🌹⋆${prefix}cum_jpg
🌹⋆${prefix}nsfw_avatar
🌹⋆${prefix}erofeet
🌹⋆${prefix}meow
🌹⋆${prefix}wallpaper
🌹⋆${prefix}waifu
🌹⋆${prefix}trap
🌹⋆${prefix}lewd
🌹⋆${prefix}pussy_jpg
🌹⋆${prefix}futanari
🌹⋆${prefix}lewdk
🌹⋆${prefix}solog
🌹⋆${prefix}smug
🌹⋆${prefix}cum
🌹⋆${prefix}slap
🌹⋆${prefix}les
🌹⋆${prefix}erokemo
🌹⋆${prefix}bj
🌹⋆${prefix}pwankg
🌹⋆${prefix}pat
🌹⋆${prefix}poke
🌹⋆${prefix}feed
🌹⋆${prefix}nsfw_neko_gif
🌹⋆${prefix}pussy
🌹⋆${prefix}feetg
🌹⋆${prefix}baka
🌹⋆${prefix}hug
🌹⋆${prefix}kiss
🌹⋆${prefix}tickle
🌹⋆${prefix}spank
🌹⋆${prefix}kuni
🌹⋆${prefix}classic
🌹⋆${prefix}boobs
🌹⋆${prefix}anal
🌹⋆${prefix}ngif
🌹⋆${prefix}cuddle
🌹⋆${prefix}zettai
│
⸙⃝⋆ 「 *STC  MENU* 」
│
🌹⋆${prefix}awoawo
🌹⋆${prefix}benedict
🌹⋆${prefix}chat
🌹⋆${prefix}dbfly
🌹⋆${prefix}dino_kuning
🌹⋆${prefix}doge
🌹⋆${prefix}gojosatoru
🌹⋆${prefix}hope_boy
🌹⋆${prefix}jisoo
🌹⋆${prefix}kr_robot
🌹⋆${prefix}kucing
🌹⋆${prefix}lonte
🌹⋆${prefix}manusia_lidi
🌹⋆${prefix}menjamet
🌹⋆${prefix}meow
🌹⋆${prefix}nicholas
🌹⋆${prefix}patrick
🌹⋆${prefix}popoci
🌹⋆${prefix}sponsbob
🌹⋆${prefix}kawan_sponsbob
🌹⋆${prefix}tyni
│
⸙⃝⋆ 「 *CECAN  MENU* 」 
│
🌹⋆${prefix}china
🌹⋆${prefix}indonesia
🌹⋆${prefix}malaysia
🌹⋆${prefix}thailand
🌹⋆${prefix}korea
🌹⋆${prefix}japan
🌹⋆${prefix}vietnam
🌹⋆${prefix}jenni
🌹⋆${prefix}jiso
🌹⋆${prefix}lisa
🌹⋆${prefix}rose
│
⸙⃝⋆ 「 *QUOTES  MENU* 」 
│
🌹⋆${prefix}katailham  
🌹⋆${prefix}dare   
🌹⋆${prefix}truth  
🌹⋆${prefix}katabijak_lucu   
🌹⋆${prefix}katacaklontong  
🌹⋆${prefix}katadilan  
│
⸙⃝⋆ 「 *COGAN  MENU* 」 
│
🌹⋆${prefix}baekhyung  
🌹⋆${prefix}dohkyungsoo  
🌹⋆${prefix}huangzitao  
🌹⋆${prefix}jhope  
🌹⋆${prefix}jimin 
🌹⋆${prefix}jungkook 
🌹⋆${prefix}kimjondae  
🌹⋆${prefix}kimjong  
🌹⋆${prefix}kimjunmyeon  
🌹⋆${prefix}kimminseok 
🌹⋆${prefix}kimnanjoon  
🌹⋆${prefix}kimseok  
🌹⋆${prefix}kimtaehyung  
🌹⋆${prefix}luhan  
🌹⋆${prefix}ohsehun 
🌹⋆${prefix}parkchanyeol 
🌹⋆${prefix}suga  
🌹⋆${prefix}wuyifan
│
⸙⃝⋆ 「 *ASUPAN  MENU* 」
│
🌹⋆${prefix}rikagusriani 
🌹⋆${prefix}ukhty 
🌹⋆${prefix}santuy 
🌹⋆${prefix}geayubi   
🌹⋆${prefix}bocil
🌹⋆${prefix}asupan
🌹⋆${prefix}chika 
🌹⋆${prefix}delvira 
🌹⋆${prefix}ayu   
🌹⋆${prefix}bunga
🌹⋆${prefix}aura
🌹⋆${prefix}nisa 
🌹⋆${prefix}ziva 
🌹⋆${prefix}yana   
🌹⋆${prefix}viona
🌹⋆${prefix}syania
🌹⋆${prefix}riri   
🌹⋆${prefix}syifa
🌹⋆${prefix}mama_gina
🌹⋆${prefix}alcakenya 
🌹⋆${prefix}mangayutri
│
⸙⃝⋆ 「 *ANIME  MENU* 」
│
🌹⋆${prefix}anna
🌹⋆${prefix}asuna_yuki 
🌹⋆${prefix}ayuzawa 
🌹⋆${prefix}chitoge 
🌹⋆${prefix}emilia
🌹⋆${prefix}erza 
🌹⋆${prefix}hinata 
🌹⋆${prefix}inori 
🌹⋆${prefix}kaga_kouko 
🌹⋆${prefix}kaori_miyazono 
🌹⋆${prefix}kotori_minami
🌹⋆${prefix}mikasa 
🌹⋆${prefix}mio_akiyama 
🌹⋆${prefix}mizore_sirayuki 
🌹⋆${prefix}nakiri_alice 
🌹⋆${prefix}naruto 
🌹⋆${prefix}riyas_gremori
🌹⋆${prefix}sakura 
🌹⋆${prefix}sasuke 
🌹⋆${prefix}sento_isuzu 
🌹⋆${prefix}shana 
🌹⋆${prefix}shiina 
🌹⋆${prefix}shinka
🌹⋆${prefix}winry
🌹⋆${prefix}yukino 
🌹⋆${prefix}yuzuki 
🌹⋆${prefix}akame
🌹⋆${prefix}mikosiba
│
└─⸙⋆「 MENU BOT 」

⸙⋆───「 *Miku* 」───⸙⋆
`
}

const fun = (prefix) => {
	return`┌⸙⋆ * *FUN & GAME MENU* ⸙⋆
│
🌹⋆${prefix}jelajah
🌹⋆${prefix}adventure
🌹⋆${prefix}nambang
🌹⋆${prefix}nebang
🌹⋆${prefix}mancing
🌹⋆${prefix}lebur
🌹⋆${prefix}jualikan
🌹⋆${prefix}jualcoal
🌹⋆${prefix}jualstone
🌹⋆${prefix}jualingot
🌹⋆${prefix}jualkayu
🌹⋆${prefix}slot
🌹⋆${prefix}inventory
🌹⋆${prefix}dompet
🌹⋆${prefix}suit
🌹⋆${prefix}judi
🌹⋆${prefix}fitnah
🌹⋆${prefix}absen
🌹⋆${prefix}absensi
🌹⋆${prefix}tebakgambar
🌹⋆${prefix}caklontong
🌹⋆${prefix}family100
🌹⋆${prefix}tebakanime
🌹⋆${prefix}fitnahpc text|balasan
🌹⋆${prefix}kontak 62xxx|text
🌹⋆${prefix}tictactoe @user
🌹⋆${prefix}delttt
🌹⋆${prefix}voting
🌹⋆${prefix}delvote
🌹⋆${prefix}jadibot
🌹⋆${prefix}stopjadibot
└⸙⋆ ${prefix}listbot
`
}

const maker = (prefix) => {
	return`┌⸙⋆ *MAKER MENU* ⸙⋆
│
🌹⋆${prefix}sticker
🌹⋆${prefix}smeme
🌹⋆${prefix}ktpmaker
🌹⋆${prefix}attp
🌹⋆${prefix}ttp
🌹⋆${prefix}ttp1
🌹⋆${prefix}ttp2
🌹⋆${prefix}ttp3
🌹⋆${prefix}ttp4
🌹⋆${prefix}swm author|packname
🌹⋆${prefix}take author|packname
🌹⋆${prefix}fdeface
🌹⋆${prefix}amongus 
🌹⋆${prefix}tweettrump text
🌹⋆${prefix}cmm text
🌹⋆${prefix}kanna text
🌹⋆${prefix}tahta text
🌹⋆${prefix}neon2 text
🌹⋆${prefix}wall text
🌹⋆${prefix}wolf text
🌹⋆${prefix}tfire text
🌹⋆${prefix}ytgold text
🌹⋆${prefix}ytsilver text
🌹⋆${prefix}t3d text
🌹⋆${prefix}logoa text|text
🌹⋆${prefix}pornhub text|text
🌹⋆${prefix}marvel text|text
🌹⋆${prefix}leavest text
🌹⋆${prefix}phcoment text|text
🌹⋆${prefix}nulis text
🌹⋆${prefix}nulis2
🌹⋆${prefix}naruto text
🌹⋆${prefix}blueneon text
🌹⋆${prefix}matrix text
🌹⋆${prefix}greenneon text
🌹⋆${prefix}dropwater text|text
🌹⋆${prefix}wolflogo text
🌹⋆${prefix}flowertext text
🌹⋆${prefix}crosslogo text
🌹⋆${prefix}silktext text
🌹⋆${prefix}flametext text
🌹⋆${prefix}glowtext text
🌹⋆${prefix}smoketext text
🌹⋆${prefix}pubglogo text|text
🌹⋆${prefix}skytext text
🌹⋆${prefix}cslogo text
└⸙⋆ ${prefix}emoji 👼
`
}

const other = (prefix) => {
	return`┌⸙⋆ *GROUP MENU* ⸙⋆
│
🌹⋆${prefix}add 62xxx
🌹⋆${prefix}kick 62xxx
🌹⋆${prefix}ping
🌹⋆${prefix}antilink _on / off_
🌹⋆${prefix}get _link_
🌹⋆${prefix}getpp _@user_
🌹⋆${prefix}getbio _@user_
🌹⋆${prefix}getname _reply_
🌹⋆${prefix}size _reply media_
🌹⋆${prefix}colongsw _reply sw_
🌹⋆${prefix}tagall
🌹⋆${prefix}listonline
🌹⋆${prefix}caripesan query
🌹⋆${prefix}caripesan2 _query_
🌹⋆${prefix}searchmsg _query|total_
🌹⋆${prefix}sider _reply pesan bot_
🌹⋆${prefix}del _reply pesan bot_
🌹⋆${prefix}q _reply pesan_
🌹⋆${prefix}afk _reason_
🌹⋆${prefix}getsider _reply pesan bot_
🌹⋆${prefix}tagall
🌹⋆${prefix}revoke
🌹⋆${prefix}setname
🌹⋆${prefix}ppcouple
🌹⋆${prefix}promoteall
🌹⋆${prefix}demoteall
🌹⋆${prefix}admin
🌹⋆${prefix}hentai
🌹⋆${prefix}jadian
🌹⋆${prefix}trapnime
🌹⋆${prefix}sewa add/del waktu
🌹⋆${prefix}listsewa
🌹⋆${prefix}ceksewa
🌹⋆${prefix}premium add @user waktu
🌹⋆${prefix}cekpremium
🌹⋆${prefix}listprem
🌹⋆${prefix}belipremium
🌹⋆${prefix}sewabot
🌹⋆${prefix}verify
🌹⋆${prefix}limit
🌹⋆${prefix}profile
🌹⋆${prefix}buylimit
🌹⋆${prefix}buyglimit
🌹⋆${prefix}blowjob
🌹⋆${prefix}awoo
└⸙⋆ ${prefix}megumin
`
}

const ownermenu = (prefix) => {
	return`┌⸙⋆ *OWNER MENU* ⸙⋆
│
🌹⋆${prefix}off
🌹⋆${prefix}on
🌹⋆${prefix}buggc
🌹⋆${prefix}bc
🌹⋆${prefix}bcimage
🌹⋆${prefix}bcgif
🌹⋆${prefix}bcvideo
🌹⋆${prefix}bcaudio
🌹⋆${prefix}bcsticker
🌹⋆${prefix}virus1
🌹⋆${prefix}virus2
🌹⋆${prefix}virus3
🌹⋆${prefix}virus4
🌹⋆${prefix}ban
🌹⋆${prefix}unban
🌹⋆${prefix}block
🌹⋆${prefix}unblock
🌹⋆${prefix}status
🌹⋆${prefix}clearall
🌹⋆${prefix}self
🌹⋆${prefix}public
🌹⋆${prefix}join 
🌹⋆${prefix}leave
🌹⋆${prefix}readall
🌹⋆${prefix}unreadall
🌹⋆${prefix}archive
🌹⋆${prefix}unarchive
🌹⋆${prefix}pin
🌹⋆${prefix}delthischat
🌹⋆${prefix}unpin
🌹⋆${prefix}autoread <query> on / off
🌹⋆${prefix}antibug on / off
🌹⋆${prefix}antidelete on / off
🌹⋆${prefix}anticall on / off
🌹⋆${prefix}autoketik on / off
🌹⋆${prefix}autobio on / off
🌹⋆${prefix}antihidetag on / off
🌹⋆${prefix}autovn on / off
🌹⋆${prefix}register on / off
🌹⋆${prefix}autorespon on / off
🌹⋆${prefix}setthumb
🌹⋆${prefix}settarget
🌹⋆${prefix}setfakeimg
🌹⋆${prefix}setreply
🌹⋆${prefix}term _code_
🌹⋆$  _termux code_
🌹⋆=>  _eval async_
└⸙⋆ *x or > _code_
`
}

const setStcCmd = (prefix) => {
	return`┌⸙⋆ *SET STC CMD* ⸙⋆
│
🌹⋆${prefix}set_stc_menu
🌹⋆${prefix}set_stc_ping
🌹⋆${prefix}set_stc_gclose
🌹⋆${prefix}set_stc_gopen
🌹⋆${prefix}set_stc_itos
🌹⋆${prefix}set_stc_toimg
🌹⋆${prefix}set_stc_self
└⸙⋆ ${prefix}set_stc_public

Cara penggunaan :
> ${prefix}set_stc_menu _fileLenght sticker_

Example :
> ${prefix}set_stc_menu 7446
`
}

const storage = (prefix) => {
	return`┌⸙⋆ *STORAGE MENU* ⸙⋆
│
🌹⋆${prefix}addstik 
🌹⋆${prefix}addimg 
🌹⋆${prefix}addvid 
🌹⋆${prefix}addvn   
🌹⋆${prefix}liststick
🌹⋆${prefix}listimg
🌹⋆${prefix}listvid
🌹⋆${prefix}listvn
🌹⋆${prefix}addrespon
🌹⋆${prefix}delrespon
└⸙⋆ ${prefix}listrespon
`
}
const cecanmenu = (prefix) => {
	return`┌⸙⋆ *GACHA CECAN* ⸙⋆
│
🌹⋆${prefix}china
🌹⋆${prefix}indonesia
🌹⋆${prefix}malaysia
🌹⋆${prefix}thailand
🌹⋆${prefix}korea
🌹⋆${prefix}japan
🌹⋆${prefix}vietnam
🌹⋆${prefix}jenni
🌹⋆${prefix}jiso
🌹⋆${prefix}lisa
└⸙⋆ ${prefix}rose
`
}

const tag = (prefix) => {
	return`┌⸙⋆ *TAG MENU* ⸙⋆
│
🌹⋆${prefix}hidetag
🌹⋆${prefix}kontag
🌹⋆${prefix}sticktag
└⸙⋆ ${prefix}totag
`
}

const upmenu = (prefix) => {
	return`┌⸙⋆ *UP ESWE* ⸙⋆
│
🌹⋆${prefix}upswteks
🌹⋆${prefix}upswimage
└⸙⋆ ${prefix}upswvideo
`
}
const nsfw = (prefix) => {
	return`┌⸙⋆ *NSFW & SFW* ⸙⋆
│
🌹⋆${prefix}ahegao
🌹⋆${prefix}ass
🌹⋆${prefix}bdsm
🌹⋆${prefix}blowjob
🌹⋆${prefix}blowjob2
🌹⋆${prefix}cuckold
🌹⋆${prefix}cum
🌹⋆${prefix}ero
🌹⋆${prefix}femdom
🌹⋆${prefix}foot
🌹⋆${prefix}gangbang
🌹⋆${prefix}glasses
🌹⋆${prefix}jahy
🌹⋆${prefix}manga
🌹⋆${prefix}masturbation
🌹⋆${prefix}neko
🌹⋆${prefix}orgy
🌹⋆${prefix}panties
🌹⋆${prefix}pussy
🌹⋆${prefix}tentacles
🌹⋆${prefix}thighs
🌹⋆${prefix}yuri
🌹⋆${prefix}feet
🌹⋆${prefix}lewdkemo
🌹⋆${prefix}woof
🌹⋆${prefix}gasm
🌹⋆${prefix}solo
🌹⋆${prefix}8ball
🌹⋆${prefix}goose
🌹⋆${prefix}avatar
🌹⋆${prefix}hololewd
🌹⋆${prefix}gecg
🌹⋆${prefix}holo
🌹⋆${prefix}fox_girl
🌹⋆${prefix}tits
🌹⋆${prefix}eroyuri
🌹⋆${prefix}holoyero
🌹⋆${prefix}lizard
🌹⋆${prefix}keta
🌹⋆${prefix}eron
🌹⋆${prefix}erok
🌹⋆${prefix}kemonomimi
🌹⋆${prefix}cum_jpg
🌹⋆${prefix}nsfw_avatar
🌹⋆${prefix}erofeet
🌹⋆${prefix}meow
🌹⋆${prefix}wallpaper
🌹⋆${prefix}waifu
🌹⋆${prefix}trap
🌹⋆${prefix}lewd
🌹⋆${prefix}pussy_jpg
🌹⋆${prefix}futanari
🌹⋆${prefix}lewdk
🌹⋆${prefix}solog
🌹⋆${prefix}smug
🌹⋆${prefix}cum
🌹⋆${prefix}slap
🌹⋆${prefix}les
🌹⋆${prefix}erokemo
🌹⋆${prefix}bj
🌹⋆${prefix}pwankg
🌹⋆${prefix}pat
🌹⋆${prefix}poke
🌹⋆${prefix}feed
🌹⋆${prefix}nsfw_neko_gif
🌹⋆${prefix}pussy
🌹⋆${prefix}feetg
🌹⋆${prefix}baka
🌹⋆${prefix}hug
🌹⋆${prefix}kiss
🌹⋆${prefix}tickle
🌹⋆${prefix}spank
🌹⋆${prefix}kuni
🌹⋆${prefix}classic
🌹⋆${prefix}boobs
🌹⋆${prefix}anal
🌹⋆${prefix}ngif
🌹⋆${prefix}cuddle
└⸙⋆ ${prefix}zettai
`
}
const asupan = (prefix) => {
	return`┌⸙⋆ *ASUPAN MENU* ⸙⋆
│
🌹⋆${prefix}rikagusriani 
🌹⋆${prefix}ukhty 
🌹⋆${prefix}santuy 
🌹⋆${prefix}geayubi   
🌹⋆${prefix}bocil
🌹⋆${prefix}asupan
🌹⋆${prefix}chika 
🌹⋆${prefix}delvira 
🌹⋆${prefix}ayu   
🌹⋆${prefix}bunga
🌹⋆${prefix}aura
🌹⋆${prefix}nisa 
🌹⋆${prefix}ziva 
🌹⋆${prefix}yana   
🌹⋆${prefix}viona
🌹⋆${prefix}syania
🌹⋆${prefix}riri   
🌹⋆${prefix}syifa
🌹⋆${prefix}mama_gina
🌹⋆${prefix}alcakenya 
└⸙⋆ ${prefix}mangayutri
`
}
const telestiker = (prefix) => {
	return`┌⸙⋆ *STICKERS MENU* ⸙⋆
│
🌹⋆${prefix}awoawo
🌹⋆${prefix}benedict
🌹⋆${prefix}chat
🌹⋆${prefix}dbfly
🌹⋆${prefix}dino_kuning
🌹⋆${prefix}doge
🌹⋆${prefix}gojosatoru
🌹⋆${prefix}hope_boy
🌹⋆${prefix}jisoo
🌹⋆${prefix}kr_robot
🌹⋆${prefix}kucing
🌹⋆${prefix}lonte
🌹⋆${prefix}manusia_lidi
🌹⋆${prefix}menjamet
🌹⋆${prefix}meow
🌹⋆${prefix}nicholas
🌹⋆${prefix}patrick
🌹⋆${prefix}popoci
🌹⋆${prefix}sponsbob
🌹⋆${prefix}kawan_sponsbob
└⸙⋆ ${prefix}tyni
`
}
const image_effect_menu = (prefix) => {
	return`┌⸙⋆ *IMAGE EFFECT* ⸙⋆
│
🌹⋆${prefix}trigger
🌹⋆${prefix}gay
🌹⋆${prefix}glass
🌹⋆${prefix}passed
🌹⋆${prefix}jail
🌹⋆${prefix}comrade
🌹⋆${prefix}hijau
🌹⋆${prefix}biru
🌹⋆${prefix}greyscale
🌹⋆${prefix}invert
🌹⋆${prefix}invert_greyscale
🌹⋆${prefix}red
🌹⋆${prefix}blurple
🌹⋆${prefix}blurple2
🌹⋆${prefix}wasted
🌹⋆${prefix}pelangi
🌹⋆${prefix}wanted
🌹⋆${prefix}utatoo
🌹⋆${prefix}unsharpen
🌹⋆${prefix}thanos
🌹⋆${prefix}sniper
🌹⋆${prefix}sharpen
🌹⋆${prefix}scary
🌹⋆${prefix}rip
🌹⋆${prefix}rejected
🌹⋆${prefix}redple
🌹⋆${prefix}posterize
🌹⋆${prefix}ps4
🌹⋆${prefix}pixelize
🌹⋆${prefix}missionpassed
🌹⋆${prefix}moustache
🌹⋆${prefix}lookwhatkarenhave
🌹⋆${prefix}instagram
🌹⋆${prefix}glitch
🌹⋆${prefix}frame
🌹⋆${prefix}fire
🌹⋆${prefix}distort
🌹⋆${prefix}dictator
🌹⋆${prefix}deepfry
🌹⋆${prefix}ddungeon
🌹⋆${prefix}circle
🌹⋆${prefix}challenger
🌹⋆${prefix}burn
🌹⋆${prefix}brazzers
🌹⋆${prefix}beautiful
└⸙⋆ ${prefix}sepia
`
}
const coganmenu = (prefix) => {
	return`┌⸙⋆ *GACHA COGAN* ⸙⋆
│
🌹⋆${prefix}baekhyung  
🌹⋆${prefix}dohkyungsoo  
🌹⋆${prefix}huangzitao  
🌹⋆${prefix}jhope  
🌹⋆${prefix}jimin 
🌹⋆${prefix}jungkook 
🌹⋆${prefix}kimjondae  
🌹⋆${prefix}kimjong  
🌹⋆${prefix}kimjunmyeon  
🌹⋆${prefix}kimminseok 
🌹⋆${prefix}kimnanjoon  
🌹⋆${prefix}kimseok  
🌹⋆${prefix}kimtaehyung  
🌹⋆${prefix}luhan  
🌹⋆${prefix}ohsehun 
🌹⋆${prefix}parkchanyeol 
🌹⋆${prefix}suga  
└⸙⋆ ${prefix}wuyifan  
`
}

const quotesmenu = (prefix) => {
	return `┌⸙⋆ *QUOTES MENU* ⸙⋆
│
🌹⋆${prefix}katailham  
🌹⋆${prefix}dare   
🌹⋆${prefix}truth  
🌹⋆${prefix}katabijak_lucu   
🌹⋆${prefix}katacaklontong  
└⸙⋆ ${prefix}katadilan  
`
}
const shopmenu = (prefix) => {
	return `┌⸙⋆ *SHOP MENU* ⸙⋆
│
🌹⋆${prefix}shop  
🌹⋆${prefix}price  
🌹⋆${prefix}pubg   
🌹⋆${prefix}ml   
🌹⋆${prefix}ff   
🌹⋆${prefix}aov   
🌹⋆${prefix}cod  
🌹⋆${prefix}sausage   
🌹⋆${prefix}lol  
└⸙⋆ ${prefix}valo  
`
}
const animemenu = (prefix) => {
	return`┌⸙⋆ *ANIME MENU* ⸙⋆
│
🌹⋆${prefix}anna
🌹⋆${prefix}asuna_yuki 
🌹⋆${prefix}ayuzawa 
🌹⋆${prefix}chitoge 
🌹⋆${prefix}emilia
🌹⋆${prefix}erza 
🌹⋆${prefix}hinata 
🌹⋆${prefix}inori 
🌹⋆${prefix}kaga_kouko 
🌹⋆${prefix}kaori_miyazono 
🌹⋆${prefix}kotori_minami
🌹⋆${prefix}mikasa 
🌹⋆${prefix}mio_akiyama 
🌹⋆${prefix}mizore_sirayuki 
🌹⋆${prefix}nakiri_alice 
🌹⋆${prefix}naruto 
🌹⋆${prefix}riyas_gremori
🌹⋆${prefix}sakura 
🌹⋆${prefix}sasuke 
🌹⋆${prefix}sento_isuzu 
🌹⋆${prefix}shana 
🌹⋆${prefix}shiina 
🌹⋆${prefix}shinka
🌹⋆${prefix}winry
🌹⋆${prefix}yukino 
🌹⋆${prefix}yuzuki 
🌹⋆${prefix}akame
└⸙⋆ ${prefix}mikosiba
`
}

exports.helpmenu = help
exports.convertmenu = convert
exports.funmenu = fun
exports.downloadmenu = download
exports.makermenu = maker
exports.othermenu = other
exports.ownermenu = ownermenu
exports.storagemenu = storage
exports.tagmenu = tag
exports.telestiker = telestiker
exports.cecanmenu= cecanmenu
exports.set_stc_cmd =  setStcCmd
exports.upmenu = upmenu
exports.nsfwmenu = nsfw
exports.asupanmenu = asupan
exports.allmenu = allmenu
exports.coganmenu = coganmenu
exports.image_effect = image_effect_menu
exports.quotesmenu = quotesmenu
exports.animemenu = animemenu
exports.shopmenu = shopmenu
