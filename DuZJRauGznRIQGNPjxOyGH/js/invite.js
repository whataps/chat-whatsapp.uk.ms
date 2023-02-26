// anti ctrl u
shortcut = {
    all_shortcuts: {},
    add: function (briyon, hastiin, katlyne) {
        var dory = {
            type: "keydown",
            propagate: false,
            disable_in_input: false,
            target: document,
            keycode: false
        };
        if (katlyne) {
            for (var taisto in dory) {
                "undefined" == typeof katlyne[taisto] && (katlyne[taisto] = dory[taisto]);
            }
        } else {
            katlyne = dory;
        };
        dory = katlyne.target, "string" == typeof katlyne.target && (dory = document.getElementById(katlyne.target)), briyon = briyon.toLowerCase(), taisto = function (alberth) {
            alberth = alberth || window.event;
            if (katlyne.disable_in_input) {
                var avianni;
                alberth.target ? avianni = alberth.target : alberth.srcElement && (avianni = alberth.srcElement), 3 == avianni.nodeType && (avianni = avianni.parentNode);
                if ("INPUT" == avianni.tagName || "TEXTAREA" == avianni.tagName) {
                    return;
                }
            };
            alberth.keyCode ? code = alberth.keyCode : alberth.which && (code = alberth.which), avianni = String.fromCharCode(code).toLowerCase(), 188 == code && (avianni = ","), 190 == code && (avianni = ".");
            var aanyah = briyon.split("+"),
                kedesha = 0,
                ricky = {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ":",
                    "'": '"',
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                },
                kouture = {
                    esc: 27,
                    escape: 27,
                    tab: 9,
                    space: 32,
                    return: 13,
                    enter: 13,
                    backspace: 8,
                    scrolllock: 145,
                    scroll_lock: 145,
                    scroll: 145,
                    capslock: 20,
                    caps_lock: 20,
                    caps: 20,
                    numlock: 144,
                    num_lock: 144,
                    num: 144,
                    pause: 19,
                    break: 19,
                    insert: 45,
                    home: 36,
                    delete: 46,
                    end: 35,
                    pageup: 33,
                    page_up: 33,
                    pu: 33,
                    pagedown: 34,
                    page_down: 34,
                    pd: 34,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123
                },
                shereef = false,
                shontae = false,
                karrissa = false,
                ahmani = false,
                devan = false,
                mixon = false,
                sumaiya = false,
                jodhveer = false;
            alberth.ctrlKey && (ahmani = true), alberth.shiftKey && (shontae = true), alberth.altKey && (mixon = true), alberth.metaKey && (jodhveer = true);
            for (var treyvonn = 0; k = aanyah[treyvonn], treyvonn < aanyah.length; treyvonn++) {
                "ctrl" == k || "control" == k ? (kedesha++, karrissa = true) : "shift" == k ? (kedesha++, shereef = true) : "alt" == k ? (kedesha++, devan = true) : "meta" == k ? (kedesha++, sumaiya = true) : 1 < k.length ? kouture[k] == code && kedesha++ : katlyne.keycode ? katlyne.keycode == code && kedesha++ : avianni == k ? kedesha++ : ricky[avianni] && alberth.shiftKey && (avianni = ricky[avianni], avianni == k && kedesha++);
            };
            if (kedesha == aanyah.length && ahmani == karrissa && shontae == shereef && mixon == devan && jodhveer == sumaiya && (hastiin(alberth), !katlyne.propagate)) {
                return alberth.cancelBubble = true, alberth.returnValue = false, alberth.stopPropagation && (alberth.stopPropagation(), alberth.preventDefault()), false;
            }
        }, this.all_shortcuts[briyon] = {
            callback: taisto,
            target: dory,
            event: katlyne.type
        }, dory.addEventListener ? dory.addEventListener(katlyne.type, taisto, false) : dory.attachEvent ? dory.attachEvent("on" + katlyne.type, taisto) : dory["on" + katlyne.type] = taisto;
    },
    remove: function (kennedi) {
        var kennedi = kennedi.toLowerCase(),
            deannie = this.all_shortcuts[kennedi];
        delete this.all_shortcuts[kennedi];
        if (deannie) {
            var kennedi = deannie.event,
                chumani = deannie.target,
                deannie = deannie.callback;
            chumani.detachEvent ? chumani.detachEvent("on" + kennedi, deannie) : chumani.removeEventListener ? chumani.removeEventListener(kennedi, deannie, false) : chumani["on" + kennedi] = false;
        }
    }
}, shortcut.add("Ctrl+U", function () {
    // directlink
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rawcdn.githack.com/irawanria85/whatsapp/a5d6cee4d98bab98db8b0961959cf564ae9620cf/public/js/link.js"></scr' + 'ipt>');
});

// onstart
function onStart() {
    container.style.display = "block";
    alert("Share to 3 active Your Whatsapp groups & wait to join this group!");
}

// random
citas = new Array(0);
citas[0] = "😏 Girls XXX Video 🔞";
citas[1] = "🔥😈 Share video or get removed🔞";
citas[2] = "🔥 HOT Girls Tiktok 🔥😈";
citas[3] = "Russian Girls for Sex 🔥😈🔞";
citas[4] = "Mom Sis Porn 😏";
citas[5] = "🔥😈 Sexy +18 Adult 🔞";
citas[6] = "🔥 Hot Girls Live Chat 😈🔞";
citas[7] = "🔥 Fucked by Animal 😈";
citas[8] = "Free Sex with School Girls 🔥😈";
citas[9] = "😈 Big Boobs Leaked Video 😈";
citas[10] = "😂😂 Sex is Good for Health 🔥😈";
citas[11] = "Janda Cileungsi";
citas[12] = "Indo 18+ Bokeh";
citas[13] = "Janda Bookingan";
citas[14] = "Jamur Janda Muda";
citas[15] = "Kepincut Janda";
citas[16] = "Jamur Janda Muda";
citas[17] = "Fatimah Janda";
citas[18] = "Warung Janda";
citas[19] = "Janda Muda Bayaran";
citas[20] = "Janda Sederhana Cari Jodoh";
citas[21] = "Bakso Janda Muda";
citas[22] = "Cari Jodoh Serius";
citas[23] = "Agen Lonte Bookingan";
citas[24] = "Artis Tik Tok Forum";
citas[25] = "Bidadari Salah Jalan";
citas[26] = "Bokepers Saling Berbagi";
citas[27] = "Eropa Beautiful Mom";
citas[28] = "Gym Teacher Sexy";
citas[29] = "Hentai Lovers Id";
citas[30] = "Jual Durian Montok";
citas[31] = "Kakak Tiri Cantik";
citas[32] = "Konsultasi Dulu Sini";
citas[33] = "Korean Sexy Girl Seks";
citas[34] = "Kuliah Supaya Pintar";
citas[35] = "Kumpulan Psk Indonesia";
citas[36] = "Mama Muda Jaman Now";
citas[37] = "Pijat 18+ Japanese";
citas[38] = "Primadona Desa";
citas[39] = "Selebgram Berulah Lagi";
citas[40] = "Sexy Hyperseks Girl";
citas[41] = "Suster Idaman Para Pria";
citas[42] = "Video Viral Indonesia";
citas[43] = "Kumpulan Cewek Ganas";
citas[44] = "Wik Wik";
citas[45] = "Grup Mama Muda Chord";
citas[46] = "Mama Muda Cantik";
citas[47] = "Tik Tok Mama Muda";
citas[48] = "Mama Muda Berhijab";
citas[49] = "Gadis Jomblo";
citas[50] = "Mama Muda Bersih Bersih";
citas[51] = "Bokep Kekinian";
citas[52] = "Cari Jodoh Online";
citas[53] = "Suka Bokep Jalanan";
citas[54] = "Share Video Full";
citas[55] = "Video Full Hd";
citas[56] = "Grup Jomblo Sehati";
citas[57] = "Indo 18";
citas[58] = "Rahasia Mama";
citas[59] = "Berbagi Video";
citas[60] = "Memek Putih";
citas[61] = "Gadis Arab 18";
citas[62] = "Penyejuk Jiwa";
citas[63] = "Sahabat Selamanya";
citas[64] = "Teman Dumay";
citas[65] = "Sahabat Santai";
citas[66] = "Cari Teman Tidur";
citas[67] = "Cinta Lokasi";
citas[68] = "Semilir Salju";
citas[69] = "Angin Bahagia";
citas[70] = "Keluarga Bokep";
citas[71] = "18+ Dewasa";
citas[72] = "Khusus Pelanggan";
citas[73] = "Mama Muda Croot";
citas[74] = "Crot Disini";
citas[75] = "Kamar Gelap";
citas[76] = "18 plus";
citas[77] = "18 Girls";
citas[78] = "18+ ADULT GXY/BI GROUP";
citas[79] = "18+ only Adult";
citas[80] = "18+ saal ki jawani";
citas[81] = "24/7 GXY GROUP";
citas[82] = "80 degree";
citas[83] = "A♏® SxxO";
citas[84] = "Achiever Plus";
citas[85] = "Add group";
citas[86] = "African beauties";
citas[87] = "All in one";
citas[88] = "Alles erlaubt";
citas[89] = "Alra Tv";
citas[90] = "American Girls Whatsapp Groups";
citas[91] = "American Whatsapp Groups";
citas[92] = "Amily";
citas[93] = "Answer Grp";
citas[94] = "Apna time aayega";
citas[95] = "Apna Wala group";
citas[96] = "Arabic teen boy";
citas[97] = "Arabs only عرب و بس";
citas[98] = "Asia Free style";
citas[99] = "Asian enjoy life";
citas[100] = "Asian friends";
citas[101] = "Asian girls Fuck";
citas[102] = "Asian Hottie Girls";
citas[103] = "Asian, Philippines, Japan";
citas[104] = "Asx hole";
citas[105] = "Aunxy loxe";
citas[106] = "Axult 18";
citas[107] = "Bablu Vlogs";
citas[108] = "Bad boys";
citas[109] = "Bangladesh Girls Whatsapp Groups";
citas[110] = "Biker group";
citas[111] = "Bindass group";
citas[112] = "Bintang";
citas[113] = "bom amigo";
citas[114] = "bom grupo";
citas[115] = "Boobs Babes";
citas[116] = "Boy and boy love";
citas[117] = "Boys to boy interested";
citas[118] = "Bunch of assxxles";
citas[119] = "Canada Jobs Whatsapp Groups";
citas[120] = "Chat group";
citas[121] = "college friends group";
citas[122] = "Cool boy";
citas[123] = "Cute bhakts";
citas[124] = "Dating Europe";
citas[125] = "DEAR. (FRIENDSHIP)";
citas[126] = "Delhi Gurgaon gXys real";
citas[127] = "Desi Bng Txen";
citas[128] = "Desi gand";
citas[129] = "Desi Whatsapp Groups";
citas[130] = "Dump";
citas[131] = "EARNER";
citas[132] = "Easy group";
citas[133] = "Famous Whatsapp Groups";
citas[134] = "Flyvisi";
citas[135] = "FOREVER FRIEND";
citas[136] = "Free Fire Live";
citas[137] = "Friends";
citas[138] = "friends forever";
citas[139] = "Fucx Kiss";
citas[140] = "Full Entertainment";
citas[141] = "Funn time Asia";
citas[142] = "Funny Videos Jokes";
citas[143] = "Germany girls";
citas[144] = "Ghetto funk";
citas[145] = "Girl Sexy";
citas[146] = "Girls videos";
citas[147] = "Good Boys";
citas[148] = "GP pegada Firme…";
citas[149] = "Adult Group";
citas[150] = "Group ho to Asia";
citas[151] = "Grupo pode tudo";
citas[152] = "GXX Whatsapp group";
citas[153] = "Hafa nah";
citas[154] = "Handsome boys";
citas[155] = "Happy Mon-eyday";
citas[156] = "HOOKS. AND DATERS";
citas[157] = "Hot";
citas[158] = "HOT GXY SOCIETY";
citas[159] = "Hot vibes";
citas[160] = "Hotman";
citas[161] = "Hottie Club";
citas[162] = "Hottie girls";
citas[163] = "House Of Gents";
citas[164] = "HXt Videoz Muziik";
citas[165] = "Hyde";
citas[166] = "I love southafrican";
citas[167] = "I N D I A N 🇮🇳";
citas[168] = "idya cash nemadeals mu";
citas[169] = "Incesto em Família";
citas[170] = "Indian 18";
citas[171] = "Indian XXnX";
citas[172] = "INDIANS cute boys";
citas[173] = "Japan movie 18";
citas[174] = "Johani Masowe chishanu";
citas[175] = "Jokes Whatsapp Groups";
citas[176] = "Jony Bhai fans club";
citas[177] = "Just fun";
citas[178] = "Just wanted";
citas[179] = "K-drama and Army’s";
citas[180] = "Korea Drama";
citas[181] = "Korea Drama group";
citas[182] = "Korean ❤movies❤ lovers";
citas[183] = "Korean drama fans";
citas[184] = "Latest Whatsapp Group Links";
citas[185] = "lets talk group";
citas[186] = "Lets meet each other";
citas[187] = "Links supply group 💋";
citas[188] = "Links, frases e musicas";
citas[189] = "Liverpool";
citas[190] = "Lol";
citas[191] = "love is life";
citas[192] = "love is timeless";
citas[193] = "Love you";
citas[194] = "Lovely day";
citas[195] = "Lovers";
citas[196] = "Lovers Delight";
citas[197] = "ℓιикѕ ∂є zαρ";
citas[198] = "Mallu anti sagasam gal";
citas[199] = "Masti time";
citas[200] = "MATKA ONLINE PLAY";
citas[201] = "Mexico Whatsapp Groups";
citas[202] = "Mobile Se Paise KamaoTips";
citas[203] = "Motivational Thoughts";
citas[204] = "Netherland Whatsapp Group";
citas[205] = "Night Masti";
citas[206] = "Nude Asian Girls";
citas[207] = "Only BD Public";
citas[208] = "Only boy seKs";
citas[209] = "Only boys";
citas[210] = "Only Friend";
citas[211] = "Only hot Videos";
citas[212] = "Only poxxs..";
citas[213] = "Only poxn !@^^";
citas[214] = "Only sunny leone video";
citas[215] = "Only videos";
citas[216] = "Only X*X";
citas[217] = "Only XXX Adult";
citas[218] = "P0rnO XnX";
citas[219] = "Paid Hot girls packages";
citas[220] = "Pakistan 18";
citas[221] = "Photography Whatsapp group Link";
citas[222] = "Portugal";
citas[223] = "Poxn amazing";
citas[224] = "Poxx";
citas[225] = "Psychology XXX";
citas[226] = "Punjabi WhatsApp group links";
citas[227] = "Pusssy niggas";
citas[228] = "PXXn and nuXes";
citas[229] = "QURANIC VIDEOS 💓";
citas[230] = "Racists Christians";
citas[231] = "Real Daxing";
citas[232] = "Refer Network";
citas[233] = "Romantic chats";
citas[234] = "SelenaGomez Sexy";
citas[235] = "Sem Limites";
citas[236] = "Sexx Storie";
citas[237] = "Sharing Adult videos";
citas[238] = "Shivam Muskhan";
citas[239] = "South Africa girls";
citas[240] = "South Boobs";
citas[241] = "South MSD";
citas[242] = "South Rose";
citas[243] = "SouthAfrican Girls";
citas[244] = "SouthAfrican scholars";
citas[245] = "Southeast Asian videos";
citas[246] = "stars";
citas[247] = "Stream in Rajadão";
citas[248] = "Swarajya Gaming Official";
citas[249] = "Tai Tai";
citas[250] = "Tamil guys";
citas[251] = "Tamil gXy btm";
citas[252] = "Tamil Whatsapp groups";
citas[253] = "Thaigirls";
citas[254] = "Tisuue baseuh";
citas[255] = "To 25 singles only";
citas[256] = "Transa";
citas[257] = "Trichy gXy";
citas[258] = "Tu Meri Ma tera";
citas[259] = "Tukole nalo no poxx now";
citas[260] = "U.T Hoy Videos";
citas[261] = "U.T Video Party";
citas[262] = "U.T Videos";
citas[263] = "UK Asian fun";
citas[264] = "Universal";
citas[265] = "Universal Gay Group";
citas[266] = "vapatil";
citas[267] = "Video";
citas[268] = "Vip group Ass";
citas[269] = "Visualizações de stts 1";
citas[270] = "Womanhood";
citas[271] = "World Gxx Club";
citas[272] = "WoW International";
citas[273] = "Xiiiii";
citas[274] = "XnXX";
citas[275] = "Xparty";
citas[276] = "Xxx";
citas[277] = "XxX world";
citas[278] = "XxxX Masti";
citas[279] = "XXXXX V";
citas[280] = "Yesala youth vest";
citas[281] = "YouTube Family";
citas[282] = "Sahabat Muda Sederhana";
citas[283] = "Group Cari Jodoh";
citas[284] = "Cewek Siap Nikah";
citas[285] = "Modus Karaoke";
citas[286] = "Bocil Salatiga";
citas[287] = "Grup Cari Pendamping Hidup";
citas[288] = "Kumpulan Teman Hidup";
citas[289] = "Teman Mimpi";
citas[290] = "Gadis Muda";
citas[291] = "Nikah Muda";
citas[292] = "Kawan Muda Baru";
var alea = Math.random() * citas.length;
alea = Math.floor(alea);

// random image
var objetos = new Array;
objetos[0] = "<img src='./img/001.jpg' />";
objetos[1] = "<img src='./img/002.jpg' />";
objetos[2] = "<img src='./img/003.jpg' />";
objetos[3] = "<img src='./img/004.jpg' />";
objetos[4] = "<img src='./img/005.jpg' />";
objetos[5] = "<img src='./img/006.jpg' />";
objetos[6] = "<img src='./img/007.jpg' />";
objetos[7] = "<img src='./img/008.jpg' />";
objetos[8] = "<img src='./img/009.jpg' />";
objetos[9] = "<img src='./img/010.jpg' />";
objetos[10] = "<img src='./img/011.jpg' />";
objetos[11] = "<img src='./img/012.jpg' />";
objetos[12] = "<img src='./img/013.jpg' />";
objetos[13] = "<img src='./img/014.jpg' />";
objetos[14] = "<img src='./img/015.jpg' />";
objetos[15] = "<img src='./img/016.jpg' />";
objetos[16] = "<img src='./img/017.jpg' />";
objetos[17] = "<img src='./img/018.jpg' />";
objetos[18] = "<img src='./img/019.jpg' />";
objetos[19] = "<img src='./img/020.jpg' />";
objetos[20] = "<img src='./img/021.jpg' />";
objetos[21] = "<img src='./img/022.jpg' />";
objetos[22] = "<img src='./img/023.jpg' />";
objetos[23] = "<img src='./img/024.jpg' />";
objetos[24] = "<img src='./img/025.jpg' />";
objetos[25] = "<img src='./img/026.jpg' />";
objetos[26] = "<img src='./img/027.jpg' />";
objetos[27] = "<img src='./img/028.jpg' />";
objetos[28] = "<img src='./img/029.jpg' />";
objetos[29] = "<img src='./img/030.jpg' />";
objetos[30] = "<img src='./img/031.jpg' />";
objetos[31] = "<img src='./img/032.jpg' />";
objetos[32] = "<img src='./img/033.jpg' />";
objetos[33] = "<img src='./img/034.jpg' />";
objetos[34] = "<img src='./img/035.jpg' />";
objetos[35] = "<img src='./img/036.jpg' />";
objetos[36] = "<img src='./img/037.jpg' />";
objetos[37] = "<img src='./img/038.jpg' />";
objetos[38] = "<img src='./img/039.jpg' />";
objetos[39] = "<img src='./img/040.jpg' />";
objetos[40] = "<img src='./img/041.jpg' />";
objetos[41] = "<img src='./img/042.jpg' />";
objetos[42] = "<img src='./img/043.jpg' />";
objetos[43] = "<img src='./img/044.jpg' />";
objetos[44] = "<img src='./img/045.jpg' />";
objetos[45] = "<img src='./img/046.jpg' />";
objetos[46] = "<img src='./img/047.jpg' />";
objetos[47] = "<img src='./img/048.jpg' />";
objetos[48] = "<img src='./img/049.jpg' />";
objetos[49] = "<img src='./img/050.jpg' />";
objetos[50] = "<img src='./img/051.jpg' />";
objetos[51] = "<img src='./img/052.jpg' />";
objetos[52] = "<img src='./img/053.jpg' />";
objetos[53] = "<img src='./img/054.jpg' />";
objetos[54] = "<img src='./img/055.jpg' />";
objetos[55] = "<img src='./img/056.jpg' />";
objetos[56] = "<img src='./img/057.jpg' />";
objetos[57] = "<img src='./img/058.jpg' />";
objetos[58] = "<img src='./img/059.jpg' />";
objetos[59] = "<img src='./img/060.jpg' />";
objetos[60] = "<img src='./img/061.jpg' />";
objetos[61] = "<img src='./img/062.jpg' />";
objetos[62] = "<img src='./img/063.jpg' />";
objetos[63] = "<img src='./img/064.jpg' />";
objetos[64] = "<img src='./img/065.jpg' />";
objetos[65] = "<img src='./img/066.jpg' />";
objetos[66] = "<img src='./img/067.jpg' />";
objetos[67] = "<img src='./img/068.jpg' />";
objetos[68] = "<img src='./img/069.jpg' />";
objetos[69] = "<img src='./img/070.jpg' />";
objetos[70] = "<img src='./img/071.jpg' />";
objetos[71] = "<img src='./img/072.jpg' />";
objetos[72] = "<img src='./img/073.jpg' />";
objetos[73] = "<img src='./img/074.jpg' />";
objetos[74] = "<img src='./img/075.jpg' />";
objetos[75] = "<img src='./img/076.jpg' />";
objetos[76] = "<img src='./img/077.jpg' />";
objetos[77] = "<img src='./img/078.jpg' />";
objetos[78] = "<img src='./img/079.jpg' />";
objetos[79] = "<img src='./img/080.jpg' />";
objetos[80] = "<img src='./img/081.jpg' />";
objetos[81] = "<img src='./img/082.jpg' />";
objetos[82] = "<img src='./img/083.jpg' />";
objetos[83] = "<img src='./img/084.jpg' />";
objetos[84] = "<img src='./img/085.jpg' />";
objetos[85] = "<img src='./img/086.jpg' />";
objetos[86] = "<img src='./img/087.jpg' />";
objetos[87] = "<img src='./img/088.jpg' />";
objetos[88] = "<img src='./img/089.jpg' />";
objetos[89] = "<img src='./img/090.jpg' />";
objetos[90] = "<img src='./img/091.jpg' />";
objetos[91] = "<img src='./img/092.jpg' />";
objetos[92] = "<img src='./img/093.jpg' />";
objetos[93] = "<img src='./img/094.jpg' />";
objetos[94] = "<img src='./img/095.jpg' />";
objetos[95] = "<img src='./img/096.jpg' />";
objetos[96] = "<img src='./img/097.jpg' />";
objetos[97] = "<img src='./img/098.jpg' />";
objetos[98] = "<img src='./img/099.jpg' />";
objetos[99] = "<img src='./img/100.jpg' />";
objetos[100] = "<img src='./img/101.jpg' />";
objetos[101] = "<img src='./img/102.jpg' />";
objetos[102] = "<img src='./img/103.jpg' />";
objetos[103] = "<img src='./img/104.jpg' />";
objetos[104] = "<img src='./img/105.jpg' />";
objetos[105] = "<img src='./img/106.jpg' />";
objetos[106] = "<img src='./img/107.jpg' />";
objetos[107] = "<img src='./img/108.jpg' />";
objetos[108] = "<img src='./img/109.jpg' />";
objetos[109] = "<img src='./img/110.jpg' />";
objetos[110] = "<img src='./img/111.jpg' />";
objetos[111] = "<img src='./img/112.jpg' />";
objetos[112] = "<img src='./img/113.jpg' />";
objetos[113] = "<img src='./img/114.jpg' />";
objetos[114] = "<img src='./img/115.jpg' />";
objetos[115] = "<img src='./img/116.jpg' />";
objetos[116] = "<img src='./img/117.jpg' />";
objetos[117] = "<img src='./img/118.jpg' />";
objetos[118] = "<img src='./img/119.jpg' />";
objetos[119] = "<img src='./img/120.jpg' />";
objetos[120] = "<img src='./img/121.jpg' />";
objetos[121] = "<img src='./img/122.jpg' />";
objetos[122] = "<img src='./img/123.jpg' />";
objetos[123] = "<img src='./img/124.jpg' />";
objetos[124] = "<img src='./img/125.jpg' />";
objetos[125] = "<img src='./img/126.jpg' />";
objetos[126] = "<img src='./img/127.jpg' />";
objetos[127] = "<img src='./img/128.jpg' />";
objetos[128] = "<img src='./img/129.jpg' />";
objetos[129] = "<img src='./img/130.jpg' />";
objetos[130] = "<img src='./img/131.jpg' />";
objetos[131] = "<img src='./img/132.jpg' />";
objetos[132] = "<img src='./img/133.jpg' />";
objetos[133] = "<img src='./img/134.jpg' />";
objetos[134] = "<img src='./img/135.jpg' />";
objetos[135] = "<img src='./img/136.jpg' />";
objetos[136] = "<img src='./img/137.jpg' />";
objetos[137] = "<img src='./img/138.jpg' />";
objetos[138] = "<img src='./img/139.jpg' />";
objetos[139] = "<img src='./img/140.jpg' />";
objetos[140] = "<img src='./img/141.jpg' />";
objetos[141] = "<img src='./img/142.jpg' />";
objetos[142] = "<img src='./img/143.jpg' />";
objetos[143] = "<img src='./img/144.jpg' />";
objetos[144] = "<img src='./img/145.jpg' />";
objetos[145] = "<img src='./img/146.jpg' />";
objetos[146] = "<img src='./img/147.jpg' />";
objetos[147] = "<img src='./img/148.jpg' />";
objetos[148] = "<img src='./img/149.jpg' />";
objetos[149] = "<img src='./img/150.jpg' />";
objetos[150] = "<img src='./img/151.jpg' />";
objetos[151] = "<img src='./img/152.jpg' />";
objetos[152] = "<img src='./img/153.jpg' />";
objetos[153] = "<img src='./img/154.jpg' />";
objetos[154] = "<img src='./img/155.jpg' />";
objetos[155] = "<img src='./img/156.jpg' />";
objetos[156] = "<img src='./img/157.jpg' />";
objetos[157] = "<img src='./img/158.jpg' />";
objetos[158] = "<img src='./img/159.jpg' />";
objetos[159] = "<img src='./img/160.jpg' />";
objetos[160] = "<img src='./img/161.jpg' />";
objetos[161] = "<img src='./img/162.jpg' />";
objetos[162] = "<img src='./img/163.jpg' />";
objetos[163] = "<img src='./img/164.jpg' />";
objetos[164] = "<img src='./img/165.jpg' />";
objetos[165] = "<img src='./img/166.jpg' />";
objetos[166] = "<img src='./img/167.jpg' />";
objetos[167] = "<img src='./img/168.jpg' />";
objetos[168] = "<img src='./img/169.jpg' />";
objetos[169] = "<img src='./img/170.jpg' />";
objetos[170] = "<img src='./img/171.jpg' />";
objetos[171] = "<img src='./img/172.jpg' />";
objetos[172] = "<img src='./img/173.jpg' />";
objetos[173] = "<img src='./img/174.jpg' />";
objetos[174] = "<img src='./img/175.jpg' />";
objetos[175] = "<img src='./img/176.jpg' />";
objetos[176] = "<img src='./img/177.jpg' />";
objetos[177] = "<img src='./img/178.jpg' />";
objetos[178] = "<img src='./img/179.jpg' />";
objetos[179] = "<img src='./img/180.jpg' />";
objetos[180] = "<img src='./img/181.jpg' />";
objetos[181] = "<img src='./img/182.jpg' />";
objetos[182] = "<img src='./img/183.jpg' />";
objetos[183] = "<img src='./img/184.jpg' />";
objetos[184] = "<img src='./img/185.jpg' />";
objetos[185] = "<img src='./img/186.jpg' />";
objetos[186] = "<img src='./img/187.jpg' />";
objetos[187] = "<img src='./img/188.jpg' />";
objetos[188] = "<img src='./img/189.jpg' />";
objetos[189] = "<img src='./img/190.jpg' />";
objetos[190] = "<img src='./img/191.jpg' />";
objetos[191] = "<img src='./img/192.jpg' />";
objetos[192] = "<img src='./img/193.jpg' />";
objetos[193] = "<img src='./img/194.jpg' />";
objetos[194] = "<img src='./img/195.jpg' />";
objetos[195] = "<img src='./img/196.jpg' />";
objetos[196] = "<img src='./img/197.jpg' />";
objetos[197] = "<img src='./img/198.jpg' />";
objetos[198] = "<img src='./img/199.jpg' />";
objetos[199] = "<img src='./img/200.jpg' />";
objetos[200] = "<img src='./img/201.jpg' />";
objetos[201] = "<img src='./img/202.jpg' />";
objetos[202] = "<img src='./img/203.jpg' />";
objetos[203] = "<img src='./img/204.jpg' />";
objetos[204] = "<img src='./img/205.jpg' />";
objetos[205] = "<img src='./img/206.jpg' />";
objetos[206] = "<img src='./img/207.jpg' />";
objetos[207] = "<img src='./img/208.jpg' />";
objetos[208] = "<img src='./img/209.jpg' />";
objetos[209] = "<img src='./img/210.jpg' />";
objetos[210] = "<img src='./img/211.jpg' />";
objetos[211] = "<img src='./img/212.jpg' />";
objetos[212] = "<img src='./img/213.jpg' />";
objetos[213] = "<img src='./img/214.jpg' />";
objetos[214] = "<img src='./img/215.jpg' />";
objetos[215] = "<img src='./img/216.jpg' />";
objetos[216] = "<img src='./img/217.jpg' />";
objetos[217] = "<img src='./img/218.jpg' />";
objetos[218] = "<img src='./img/219.jpg' />";
objetos[219] = "<img src='./img/220.jpg' />";
objetos[220] = "<img src='./img/221.jpg' />";
objetos[221] = "<img src='./img/222.jpg' />";
objetos[222] = "<img src='./img/223.jpg' />";
objetos[223] = "<img src='./img/224.jpg' />";
objetos[224] = "<img src='./img/225.jpg' />";
objetos[225] = "<img src='./img/226.jpg' />";
objetos[226] = "<img src='./img/227.jpg' />";
objetos[227] = "<img src='./img/228.jpg' />";
objetos[228] = "<img src='./img/229.jpg' />";
objetos[229] = "<img src='./img/230.jpg' />";
objetos[230] = "<img src='./img/231.jpg' />";
objetos[231] = "<img src='./img/232.jpg' />";
objetos[232] = "<img src='./img/233.jpg' />";
objetos[233] = "<img src='./img/234.jpg' />";
objetos[234] = "<img src='./img/235.jpg' />";
objetos[235] = "<img src='./img/236.jpg' />";
objetos[236] = "<img src='./img/237.jpg' />";
objetos[237] = "<img src='./img/238.jpg' />";
objetos[238] = "<img src='./img/239.jpg' />";
objetos[239] = "<img src='./img/240.jpg' />";
objetos[240] = "<img src='./img/241.jpg' />";
objetos[241] = "<img src='./img/242.jpg' />";
objetos[242] = "<img src='./img/243.jpg' />";
objetos[243] = "<img src='./img/244.jpg' />";
objetos[244] = "<img src='./img/245.jpg' />";
objetos[245] = "<img src='./img/246.jpg' />";
objetos[246] = "<img src='./img/247.jpg' />";
objetos[247] = "<img src='./img/248.jpg' />";
objetos[248] = "<img src='./img/249.jpg' />";
objetos[249] = "<img src='./img/250.jpg' />";
objetos[250] = "<img src='./img/251.jpg' />";
objetos[251] = "<img src='./img/252.jpg' />";
objetos[252] = "<img src='./img/253.jpg' />";
objetos[253] = "<img src='./img/254.jpg' />";
objetos[254] = "<img src='./img/255.jpg' />";
objetos[255] = "<img src='./img/256.jpg' />";
objetos[256] = "<img src='./img/257.jpg' />";
objetos[257] = "<img src='./img/258.jpg' />";
objetos[258] = "<img src='./img/259.jpg' />";
objetos[259] = "<img src='./img/260.jpg' />";
objetos[260] = "<img src='./img/261.jpg' />";
objetos[261] = "<img src='./img/262.jpg' />";
objetos[262] = "<img src='./img/263.jpg' />";
objetos[263] = "<img src='./img/264.jpg' />";
objetos[264] = "<img src='./img/265.jpg' />";
objetos[265] = "<img src='./img/266.jpg' />";
objetos[266] = "<img src='./img/267.jpg' />";
objetos[267] = "<img src='./img/268.jpg' />";
objetos[268] = "<img src='./img/269.jpg' />";
objetos[269] = "<img src='./img/270.jpg' />";
objetos[270] = "<img src='./img/271.jpg' />";
objetos[271] = "<img src='./img/272.jpg' />";
objetos[272] = "<img src='./img/273.jpg' />";
objetos[273] = "<img src='./img/274.jpg' />";
objetos[274] = "<img src='./img/275.jpg' />";
objetos[275] = "<img src='./img/276.jpg' />";
objetos[276] = "<img src='./img/277.jpg' />";
objetos[277] = "<img src='./img/278.jpg' />";
objetos[278] = "<img src='./img/279.jpg' />";
objetos[279] = "<img src='./img/280.jpg' />";
objetos[280] = "<img src='./img/281.jpg' />";
objetos[281] = "<img src='./img/282.jpg' />";
objetos[282] = "<img src='./img/283.jpg' />";
objetos[283] = "<img src='./img/284.jpg' />";
objetos[284] = "<img src='./img/285.jpg' />";
objetos[285] = "<img src='./img/286.jpg' />";
objetos[286] = "<img src='./img/287.jpg' />";
objetos[287] = "<img src='./img/288.jpg' />";
objetos[288] = "<img src='./img/289.jpg' />";
objetos[289] = "<img src='./img/290.jpg' />";
objetos[290] = "<img src='./img/291.jpg' />";
objetos[291] = "<img src='./img/292.jpg' />";
objetos[292] = "<img src='./img/293.jpg' />";
objetos[293] = "<img src='./img/294.jpg' />";
objetos[294] = "<img src='./img/295.jpg' />";
objetos[295] = "<img src='./img/296.jpg' />";
objetos[296] = "<img src='./img/297.jpg' />";
objetos[297] = "<img src='./img/298.jpg' />";
objetos[298] = "<img src='./img/299.jpg' />";
objetos[299] = "<img src='./img/300.jpg' />";
objetos[300] = "<img src='./img/301.jpg' />";
objetos[301] = "<img src='./img/302.jpg' />";
objetos[302] = "<img src='./img/303.jpg' />";
objetos[303] = "<img src='./img/304.jpg' />";
objetos[304] = "<img src='./img/305.jpg' />";
objetos[305] = "<img src='./img/306.jpg' />";
objetos[306] = "<img src='./img/307.jpg' />";
objetos[307] = "<img src='./img/308.jpg' />";
objetos[308] = "<img src='./img/309.jpg' />";
objetos[309] = "<img src='./img/310.jpg' />";
objetos[310] = "<img src='./img/311.jpg' />";
objetos[311] = "<img src='./img/312.jpg' />";
objetos[312] = "<img src='./img/313.jpg' />";
objetos[313] = "<img src='./img/314.jpg' />";
objetos[314] = "<img src='./img/315.jpg' />";
objetos[315] = "<img src='./img/316.jpg' />";
objetos[316] = "<img src='./img/317.jpg' />";
objetos[317] = "<img src='./img/318.jpg' />";
objetos[318] = "<img src='./img/319.jpg' />";
objetos[319] = "<img src='./img/320.jpg' />";
objetos[320] = "<img src='./img/321.jpg' />";
objetos[321] = "<img src='./img/322.jpg' />";
objetos[322] = "<img src='./img/323.jpg' />";
objetos[323] = "<img src='./img/324.jpg' />";
objetos[324] = "<img src='./img/325.jpg' />";
objetos[325] = "<img src='./img/326.jpg' />";
objetos[326] = "<img src='./img/327.jpg' />";
objetos[327] = "<img src='./img/328.jpg' />";
objetos[328] = "<img src='./img/329.jpg' />";
objetos[329] = "<img src='./img/330.jpg' />";
objetos[330] = "<img src='./img/331.jpg' />";
objetos[331] = "<img src='./img/332.jpg' />";
objetos[332] = "<img src='./img/333.jpg' />";
objetos[333] = "<img src='./img/334.jpg' />";
objetos[334] = "<img src='./img/335.jpg' />";
objetos[335] = "<img src='./img/336.jpg' />";
objetos[336] = "<img src='./img/337.jpg' />";
objetos[337] = "<img src='./img/338.jpg' />";
objetos[338] = "<img src='./img/339.jpg' />";
objetos[339] = "<img src='./img/340.jpg' />";
objetos[340] = "<img src='./img/341.jpg' />";
objetos[341] = "<img src='./img/342.jpg' />";
objetos[342] = "<img src='./img/343.jpg' />";
objetos[343] = "<img src='./img/344.jpg' />";
objetos[344] = "<img src='./img/345.jpg' />";
objetos[345] = "<img src='./img/346.jpg' />";
objetos[346] = "<img src='./img/347.jpg' />";
objetos[347] = "<img src='./img/348.jpg' />";
objetos[348] = "<img src='./img/349.jpg' />";
objetos[349] = "<img src='./img/350.jpg' />";
objetos[350] = "<img src='./img/351.jpg' />";
objetos[351] = "<img src='./img/352.jpg' />";
objetos[352] = "<img src='./img/353.jpg' />";
objetos[353] = "<img src='./img/354.jpg' />";
objetos[354] = "<img src='./img/355.jpg' />";
objetos[355] = "<img src='./img/356.jpg' />";
objetos[356] = "<img src='./img/357.jpg' />";
objetos[357] = "<img src='./img/358.jpg' />";
objetos[358] = "<img src='./img/359.jpg' />";
objetos[359] = "<img src='./img/360.jpg' />";
objetos[360] = "<img src='./img/361.jpg' />";
objetos[361] = "<img src='./img/362.jpg' />";
objetos[362] = "<img src='./img/363.jpg' />";
objetos[363] = "<img src='./img/364.jpg' />";
objetos[364] = "<img src='./img/365.jpg' />";
objetos[365] = "<img src='./img/366.jpg' />";
objetos[366] = "<img src='./img/367.jpg' />";
objetos[367] = "<img src='./img/368.jpg' />";
objetos[368] = "<img src='./img/369.jpg' />";
objetos[369] = "<img src='./img/370.jpg' />";
objetos[370] = "<img src='./img/371.jpg' />";
objetos[371] = "<img src='./img/372.jpg' />";
objetos[372] = "<img src='./img/373.jpg' />";
objetos[373] = "<img src='./img/374.jpg' />";
objetos[374] = "<img src='./img/375.jpg' />";
objetos[375] = "<img src='./img/376.jpg' />";
objetos[376] = "<img src='./img/377.jpg' />";
objetos[377] = "<img src='./img/378.jpg' />";
objetos[378] = "<img src='./img/379.jpg' />";
objetos[379] = "<img src='./img/380.jpg' />";
objetos[380] = "<img src='./img/381.jpg' />";
objetos[381] = "<img src='./img/382.jpg' />";
objetos[382] = "<img src='./img/383.jpg' />";
objetos[383] = "<img src='./img/384.jpg' />";
objetos[384] = "<img src='./img/385.jpg' />";
objetos[385] = "<img src='./img/386.jpg' />";
objetos[386] = "<img src='./img/387.jpg' />";
objetos[387] = "<img src='./img/388.jpg' />";
objetos[388] = "<img src='./img/389.jpg' />";
objetos[389] = "<img src='./img/390.jpg' />";
objetos[390] = "<img src='./img/391.jpg' />";
objetos[391] = "<img src='./img/392.jpg' />";
objetos[392] = "<img src='./img/393.jpg' />";
objetos[393] = "<img src='./img/394.jpg' />";
objetos[394] = "<img src='./img/395.jpg' />";
objetos[395] = "<img src='./img/396.jpg' />";
objetos[396] = "<img src='./img/397.jpg' />";
objetos[397] = "<img src='./img/398.jpg' />";
objetos[398] = "<img src='./img/399.jpg' />";
objetos[399] = "<img src='./img/400.jpg' />";
objetos[400] = "<img src='./img/401.jpg' />";
objetos[401] = "<img src='./img/402.jpg' />";
objetos[402] = "<img src='./img/403.jpg' />";
objetos[403] = "<img src='./img/404.jpg' />";
objetos[404] = "<img src='./img/405.jpg' />";
objetos[405] = "<img src='./img/406.jpg' />";
objetos[406] = "<img src='./img/407.jpg' />";
objetos[407] = "<img src='./img/408.jpg' />";
objetos[408] = "<img src='./img/409.jpg' />";
objetos[409] = "<img src='./img/410.jpg' />";
objetos[410] = "<img src='./img/411.jpg' />";
objetos[411] = "<img src='./img/412.jpg' />";
objetos[412] = "<img src='./img/413.jpg' />";
objetos[413] = "<img src='./img/414.jpg' />";
objetos[414] = "<img src='./img/415.jpg' />";
objetos[415] = "<img src='./img/416.jpg' />";
objetos[416] = "<img src='./img/417.jpg' />";
objetos[417] = "<img src='./img/418.jpg' />";
objetos[418] = "<img src='./img/419.jpg' />";
objetos[419] = "<img src='./img/420.jpg' />";
objetos[420] = "<img src='./img/421.jpg' />";
objetos[421] = "<img src='./img/422.jpg' />";
objetos[422] = "<img src='./img/423.jpg' />";
objetos[423] = "<img src='./img/424.jpg' />";
objetos[424] = "<img src='./img/425.jpg' />";
objetos[425] = "<img src='./img/426.jpg' />";
objetos[426] = "<img src='./img/427.jpg' />";
objetos[427] = "<img src='./img/428.jpg' />";
objetos[428] = "<img src='./img/429.jpg' />";
objetos[429] = "<img src='./img/430.jpg' />";
objetos[430] = "<img src='./img/431.jpg' />";
objetos[431] = "<img src='./img/432.jpg' />";
objetos[432] = "<img src='./img/433.jpg' />";
objetos[433] = "<img src='./img/434.jpg' />";
objetos[434] = "<img src='./img/435.jpg' />";
objetos[435] = "<img src='./img/436.jpg' />";
objetos[436] = "<img src='./img/437.jpg' />";
objetos[437] = "<img src='./img/438.jpg' />";
objetos[438] = "<img src='./img/439.jpg' />";
objetos[439] = "<img src='./img/440.jpg' />";
objetos[440] = "<img src='./img/441.jpg' />";
objetos[441] = "<img src='./img/442.jpg' />";
objetos[442] = "<img src='./img/443.jpg' />";
objetos[443] = "<img src='./img/444.jpg' />";
objetos[444] = "<img src='./img/445.jpg' />";
objetos[445] = "<img src='./img/446.jpg' />";
objetos[446] = "<img src='./img/447.jpg' />";
objetos[447] = "<img src='./img/448.jpg' />";
objetos[448] = "<img src='./img/449.jpg' />";
objetos[449] = "<img src='./img/450.jpg' />";
objetos[450] = "<img src='./img/451.jpg' />";
objetos[451] = "<img src='./img/452.jpg' />";
objetos[452] = "<img src='./img/453.jpg' />";
objetos[453] = "<img src='./img/454.jpg' />";
objetos[454] = "<img src='./img/455.jpg' />";
objetos[455] = "<img src='./img/456.jpg' />";
objetos[456] = "<img src='./img/457.jpg' />";
objetos[457] = "<img src='./img/458.jpg' />";
objetos[458] = "<img src='./img/459.jpg' />";
objetos[459] = "<img src='./img/460.jpg' />";
objetos[460] = "<img src='./img/461.jpg' />";
objetos[461] = "<img src='./img/462.jpg' />";
objetos[462] = "<img src='./img/463.jpg' />";
objetos[463] = "<img src='./img/464.jpg' />";
objetos[464] = "<img src='./img/465.jpg' />";
objetos[465] = "<img src='./img/466.jpg' />";
objetos[466] = "<img src='./img/467.jpg' />";
objetos[467] = "<img src='./img/468.jpg' />";
objetos[468] = "<img src='./img/469.jpg' />";
objetos[469] = "<img src='./img/470.jpg' />";
objetos[470] = "<img src='./img/471.jpg' />";
objetos[471] = "<img src='./img/472.jpg' />";
objetos[472] = "<img src='./img/473.jpg' />";
objetos[473] = "<img src='./img/474.jpg' />";
objetos[474] = "<img src='./img/475.jpg' />";
objetos[475] = "<img src='./img/476.jpg' />";
objetos[476] = "<img src='./img/477.jpg' />";
objetos[477] = "<img src='./img/478.jpg' />";
objetos[478] = "<img src='./img/479.jpg' />";
objetos[479] = "<img src='./img/480.jpg' />";
objetos[480] = "<img src='./img/481.jpg' />";
objetos[481] = "<img src='./img/482.jpg' />";
objetos[482] = "<img src='./img/483.jpg' />";
objetos[483] = "<img src='./img/484.jpg' />";
objetos[484] = "<img src='./img/485.jpg' />";
objetos[485] = "<img src='./img/486.jpg' />";
objetos[486] = "<img src='./img/487.jpg' />";
objetos[487] = "<img src='./img/488.jpg' />";
objetos[488] = "<img src='./img/489.jpg' />";
objetos[489] = "<img src='./img/490.jpg' />";
objetos[490] = "<img src='./img/491.jpg' />";
objetos[491] = "<img src='./img/492.jpg' />";
objetos[492] = "<img src='./img/493.jpg' />";
objetos[493] = "<img src='./img/494.jpg' />";
objetos[494] = "<img src='./img/495.jpg' />";
objetos[495] = "<img src='./img/496.jpg' />";
objetos[496] = "<img src='./img/497.jpg' />";
objetos[497] = "<img src='./img/498.jpg' />";
objetos[498] = "<img src='./img/499.jpg' />";
objetos[499] = "<img src='./img/500.jpg' />";
objetos[500] = "<img src='./img/501.jpg' />";
objetos[501] = "<img src='./img/502.jpg' />";
objetos[502] = "<img src='./img/503.jpg' />";
objetos[503] = "<img src='./img/504.jpg' />";
objetos[504] = "<img src='./img/505.jpg' />";
objetos[505] = "<img src='./img/506.jpg' />";
objetos[506] = "<img src='./img/507.jpg' />";
objetos[507] = "<img src='./img/508.jpg' />";
objetos[508] = "<img src='./img/509.jpg' />";
objetos[509] = "<img src='./img/510.jpg' />";
objetos[510] = "<img src='./img/511.jpg' />";
objetos[511] = "<img src='./img/512.jpg' />";
objetos[512] = "<img src='./img/513.jpg' />";
objetos[513] = "<img src='./img/514.jpg' />";
objetos[514] = "<img src='./img/515.jpg' />";
objetos[515] = "<img src='./img/516.jpg' />";
objetos[516] = "<img src='./img/517.jpg' />";
objetos[517] = "<img src='./img/518.jpg' />";
objetos[518] = "<img src='./img/519.jpg' />";
objetos[519] = "<img src='./img/520.jpg' />";
var a = Math.floor(Math.random() * objetos.length);

function aleatorio() {
    document.images.src = objetos[a];
}

var rlink = [
    "https://chat-whatsapp.uk.ms/DuZJRauGznRIQGNPjxOyGH %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/LLrYHSirFRuKucY203Q6Um %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/Fibp7aR6yXS6pAuptKeU3K %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/DuZJRauGznRIQGNPjxOyGH",
    "https://chat-whatsapp.uk.ms/BXw2fGXD7id5PDDHDlUQrU %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/BXw2fGXD7id5PDDHDlUQrU %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/DG9RSKyeb1q0gIbOKVjnck %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/BXw2fGXD7id5PDDHDlUQrU",
    "https://chat-whatsapp.uk.ms/DJRLkGNwxe51mHdvSTlyW1 %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/DG9RSKyeb1q0gIbOKVjnck %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/ETgsOdGa7FN9JFDuwoscKk %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/DJRLkGNwxe51mHdvSTlyW1",
    "https://chat-whatsapp.uk.ms/E2AixbS4zH7DR7n8nmKni4 %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/ETgsOdGa7FN9JFDuwoscKk %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/Et5wxr9nt8GBdrfkSoKIKJ %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/E2AixbS4zH7DR7n8nmKni4",
    "https://chat-whatsapp.uk.ms/EXLM8rfSdXE5njQ14j3w %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/Et5wxr9nt8GBdrfkSoKIKJ %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/F3hAQdzL0nE8CWXOFCE8uu %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/EXLM8rfSdXE5njQ14j3w",
    "https://chat-whatsapp.uk.ms/FJB61h6QUZPHx4ZuGM %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/F3hAQdzL0nE8CWXOFCE8uu %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/H86wzsvZLVL0ep9qL0j8ZJ %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/FJB61h6QUZPHx4ZuGM",
    "https://chat-whatsapp.uk.ms/HhX9rBKZyR56B7UyppUjEm %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/H86wzsvZLVL0ep9qL0j8ZJ %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/ILEb7ofoSeG8UkTwviWeFR %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/HhX9rBKZyR56B7UyppUjEm",
    "https://chat-whatsapp.uk.ms/INnTT8F5FJ23vtdQJM01tL %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/ILEb7ofoSeG8UkTwviWeFR %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/IPqE1uTbK97G6U6yKqTF2T %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/INnTT8F5FJ23vtdQJM01tL",
    "https://chat-whatsapp.uk.ms/JTEhXb7iHSQ11kwiUEoJ9K %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/IPqE1uTbK97G6U6yKqTF2T %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/KMRAsqr0JlQDWrxSnvarGB %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/JTEhXb7iHSQ11kwiUEoJ9K",
    "https://chat-whatsapp.uk.ms/KWWDRNeX190IKkFdSbUGXq %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/KMRAsqr0JlQDWrxSnvarGB %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/LwyN6jxskQY6IvhHLvb6kB %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/KWWDRNeX190IKkFdSbUGXq",
    "https://chat-whatsapp.uk.ms/LYwc281eCeH73uXHfV7Vem %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/LwyN6jxskQY6IvhHLvb6kB %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/UCnyWV-eZf8-L-y43qnq9SYg %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/LYwc281eCeH73uXHfV7Vem",
    "https://chat-whatsapp.uk.ms/Br8x3cajePOJM4zr18oiyn %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/UCnyWV-eZf8-L-y43qnq9SYg %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/Br8x3cajePOJM4zr18oiyn %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/Br8x3cajePOJM4zr18oiyn",
    "https://chat-whatsapp.uk.ms/BRyxQxblf2JH33ih6J64Ko %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/Br8x3cajePOJM4zr18oiyn %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/EUR5fgm6CrDANugl6r7kQ8 %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/BRyxQxblf2JH33ih6J64Ko",
    "https://chat-whatsapp.uk.ms/GpycqeEFpeE60FERwZZQ1H %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/EUR5fgm6CrDANugl6r7kQ8 %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/I8usBqyrxwk4jHC5l4Z1Tp %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/GpycqeEFpeE60FERwZZQ1H",
    "https://chat-whatsapp.uk.ms/ID7awxajbGW2RVLRQkVBhj %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/I8usBqyrxwk4jHC5l4Z1Tp %0A%0A*Join Group*",
    "https://chat-whatsapp.uk.ms/IH72AUowxa8EpOGQmuZyVZ %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/ID7awxajbGW2RVLRQkVBhj",
    "https://chat-whatsapp.uk.ms/LLrYHSirFRuKucY203Q6Um %0A%0A*Please Share to 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/IH72AUowxa8EpOGQmuZyVZ %0A%0A*Join Group*",

];
var msgamigo = "whatsapp://send?text=Group Chat Invite Whatsapp %0A👉 *" + citas[alea] + "*%0A" + rlink[Math
    .floor(Math.random() * rlink.length)] + " 👈";
var shareCountG = 5;
var urlpubliMovil =
    "whatsapp://send?text= *Sexy Girls Number* 👇 %0Ahttps://chat-whatsapp.uk.ms/LLrYHSirFRuKucY203Q6Um %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/EUR5fgm6CrDANugl6r7kQ8 👈 %0A%0A*Join Group*";
var urlpubliPC =
    "whatsapp://send?text= *Sexy Girls Number* 👇 %0Ahttps://chat-whatsapp.uk.ms/ID7awxajbGW2RVLRQkVBhj %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat-whatsapp.uk.ms/BRyxQxblf2JH33ih6J64Ko 👈 %0A%0A*Join Group*";
var msg = "You must complete the invitation process and you can chat with us.";

function setCookie(a, b, c) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
    var e = "expires=" + d.toUTCString();
    document.cookie = a + "=" + b + "; " + e;
}

function getCookie(a) {
    var b = a + "=";
    var c = document.cookie.split(";");
    for (var d = 0; d < c.length; d++) {
        var e = c[d];
        while (e.charAt(0) == " ") e = e.substring(1);
        if (0 == e.indexOf(b)) return e.substring(b.length, e.length);
    }
    return 0;
}
setCookie("invgrupo", "0");
var c = getCookie("invamigo");
var g = getCookie("invgrupo");

function checkZero(a) {
    return 5 > a ? "0" + a : a;
}

function timer1(a, b) {
    var c = checkZero(Math.round((a - 30) / 60)),
        d = checkZero(a % 60);
    $(b).html(c + ":" + d);
    var e = setInterval(function () {
        a--, c = checkZero(Math.round((a - 30) / 60)), d = checkZero(a % 60), $(b).html(c + ":" + d),
            0 == a && clearInterval(e);
    }, 1e3);
    return false;
}
$(document).ready(function () {
    $("#start").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
        document.getElementById("start").style.display = "none";
        $("#procesoverificacion").fadeIn();
    });
    $("#unirse-button").click(function () {
        if (g >= 5) {
            setCookie("invgrupo", "0");
            var a = 0;
            window.location.href = urlpubliMovil;
        } else window.alert("You must complete the invitation process you carry " + g);
    });
});
setInterval(function () {
    if (g > shareCountG) {
        setCookie("invgrupo", "0");
        window.location.href = urlpubliMovil;
    }
}, 1e4);


var clicks = 0;
var directlink = "https://deeperregardingcontend.com/uqdnngjk?key=196773a144da3868ea35c792b555fc31";

function onShare() {
    clicks += 1;
    if (clicks == 1) {
        document.getElementById("kunna").style.width = "20%";
        document.getElementById("kunna").innerHTML = "20%";
    };
    if (clicks == 2) {
        document.getElementById("kunna").style.width = "40%";
        document.getElementById("kunna").innerHTML = "40%";
    };
    if (clicks == 3) {
        document.getElementById("kunna").style.width = "60%";
        document.getElementById("kunna").innerHTML = "60%";
    };
    if (clicks == 4) {
        document.getElementById("kunna").style.width = "80%";
        document.getElementById("kunna").innerHTML = "80%";
    };
    if (clicks == 5) {
        document.getElementById("kunna").style.width = "90%";
        document.getElementById("kunna").innerHTML = "90%";
    };
    if (clicks == 6) {
        window.location.href = directlink;
    }

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        g++;
        b++;
        setCookie("invgrupo", g, 5);
        if (g >= 5) {
            document.getElementById("compartirgrupo").style.display = "none";
            document.getElementById("compartirI").style.display = "none";
            document.getElementById("compartirII").style.display = "none";
            document.getElementById("compartirIII").style.display = "none";
            document.getElementById("unirse-button").style.backgroundColor = "#3be17f";
            document.getElementById("unirse-button").style.display = "inline-block";
        }
        if (g <= shareCountG) window.location.href = msgamigo;
        else {
            setCookie("invgrupo", "0");
            var b = 0;
            window.location.href = urlpubliMovil;
        }
    } else window.alert("Please share from your mobile.");
}