//* Background *//
// Select fade-effect below:
// Set 1 if the background may fade from dark to medium 
// Set 2 if the background may fade from light to medium 
// Set 3 if the background may fade from very dark to very light light
// Set 4 if the background may fade from light to very light
// Set 5 if the background may fade from dark to very dark 
var fade_effect = 4

// What type of gradient should be applied Internet Explorer 5x or higher?
// Set "none" or "horizontal" or "vertical"
var gradient_effect = "horizontal"

// Speed higher=slower
var speed = 30

///////////////////////////////////////////////////////////////////////////
// CONFIGURATION ENDS HERE
///////////////////////////////////////////////////////////////////////////

var browserinfos = navigator.userAgent
var ie4 = document.all && !document.getElementById
var ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/)
var ns4 = document.layers
var ns6 = document.getElementById && !document.all
var opera = browserinfos.match(/Opera/)
var browserok = ie4 || ie5 || ns4 || ns6 || opera

if (fade_effect == 1) {
    var darkmax = 1
    var lightmax = 127
}
if (fade_effect == 2) {
    var darkmax = 127
    var lightmax = 254
}
if (fade_effect == 3) {
    var darkmax = 1
    var lightmax = 254
}
if (fade_effect == 4) {
    var darkmax = 190
    var lightmax = 254
}
if (fade_effect == 5) {
    var darkmax = 1
    var lightmax = 80
}
var hexc = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F')

var newred
var newgreen
var newblue
var oldred
var oldgreen
var oldblue

var redcol_1
var redcol_2
var greencol_1
var greencol_2
var bluecol_1
var bluecol_2
var oldcolor
var newcolor
var firsttime = true

var stepred = 1
var stepgreen = 1
var stepblue = 1

function setrandomcolor() {
    var range = (lightmax - darkmax)
    if (firsttime) {
        newred = Math.ceil(range * Math.random()) + darkmax
        newgreen = Math.ceil(range * Math.random()) + darkmax
        newblue = Math.ceil(range * Math.random()) + darkmax
        firsttime = false
    }

    oldred = Math.ceil(range * Math.random()) + darkmax
    oldgreen = Math.ceil(range * Math.random()) + darkmax
    oldblue = Math.ceil(range * Math.random()) + darkmax

    stepred = newred - oldred
    if (oldred > newred) {
        stepred = 1
    } else if (oldred < newred) {
        stepred = -1
    } else {
        stepred = 0
    }

    stepgreen = newgreen - oldgreen
    if (oldgreen > newgreen) {
        stepgreen = 1
    } else if (oldgreen < newgreen) {
        stepgreen = -1
    } else {
        stepgreen = 0
    }

    stepblue = newblue - oldblue
    if (oldblue > newblue) {
        stepblue = 1
    } else if (oldblue < newblue) {
        stepblue = -1
    } else {
        stepblue = 0
    }
    fadebg()
};

function fadebg() {
    if (newred == oldred) {
        stepred = 0
    }
    if (newgreen == oldgreen) {
        stepgreen = 0
    }
    if (newblue == oldblue) {
        stepblue = 0
    }
    newred += stepred
    newgreen += stepgreen
    newblue += stepblue

    if (stepred != 0 || stepgreen != 0 || stepblue != 0) {
        redcol_1 = hexc[Math.floor(newred / 16)];
        redcol_2 = hexc[newred % 16];
        greencol_1 = hexc[Math.floor(newgreen / 16)];
        greencol_2 = hexc[newgreen % 16];
        bluecol_1 = hexc[Math.floor(newblue / 16)];
        bluecol_2 = hexc[newblue % 16];
        newcolor = "#" + redcol_1 + redcol_2 + greencol_1 + greencol_2 + bluecol_1 + bluecol_2
        if (ie5 && gradient_effect != "none") {
            if (gradient_effect == "horizontal") {
                gradient_effect = 1
            }
            if (gradient_effect == "vertical") {
                gradient_effect = 0
            }
            greencol_1 = hexc[Math.floor(newred / 16)];
            greencol_2 = hexc[newred % 16];
            bluecol_1 = hexc[Math.floor(newgreen / 16)];
            bluecol_2 = hexc[newgreen % 16];
            redcol_1 = hexc[Math.floor(newblue / 16)];
            redcol_2 = hexc[newblue % 16];
            var newcolorCompl = "#" + redcol_1 + redcol_2 + greencol_1 + greencol_2 + bluecol_1 + bluecol_2
            document.body.style.filter =
                "progid:DXImageTransform.Microsoft.Gradient(startColorstr=" + newcolorCompl + ", endColorstr=" + newcolor + " GradientType=" + gradient_effect + ")"
        } else {
            document.bgColor = newcolor
        }
        var timer = setTimeout("fadebg()", speed);
    } else {
        clearTimeout(timer)
        newred = oldred
        newgreen = oldgreen
        newblue = oldblue
        oldcolor = newcolor
        setrandomcolor()
    }
};
// Background Color dari scout

// Load Random
function start() {
    setrandomcolor();
};
// Start Windows
if (browserok) {
    window.onload = start()
};

// random image
var images = new Array;
images[0] = "<img src='./img/gif/001.gif' />";
images[1] = "<img src='./img/gif/002.gif' />";
images[2] = "<img src='./img/gif/003.gif' />";
images[3] = "<img src='./img/gif/004.gif' />";
images[4] = "<img src='./img/gif/005.gif' />";
images[5] = "<img src='./img/gif/006.gif' />";
images[6] = "<img src='./img/gif/007.gif' />";
images[7] = "<img src='./img/gif/008.gif' />";
images[8] = "<img src='./img/gif/009.gif' />";
images[9] = "<img src='./img/gif/010.gif' />";
images[10] = "<img src='./img/gif/011.gif' />";
images[11] = "<img src='./img/gif/012.gif' />";
images[12] = "<img src='./img/gif/013.gif' />";
images[13] = "<img src='./img/gif/014.gif' />";
images[14] = "<img src='./img/gif/015.gif' />";
images[15] = "<img src='./img/gif/016.gif' />";
images[16] = "<img src='./img/gif/017.gif' />";
images[17] = "<img src='./img/gif/018.gif' />";
images[18] = "<img src='./img/gif/019.gif' />";
images[19] = "<img src='./img/gif/020.gif' />";
images[20] = "<img src='./img/gif/021.gif' />";
images[21] = "<img src='./img/gif/022.gif' />";
images[22] = "<img src='./img/gif/023.gif' />";
images[23] = "<img src='./img/gif/024.gif' />";
images[24] = "<img src='./img/gif/025.gif' />";
images[25] = "<img src='./img/gif/026.gif' />";
images[26] = "<img src='./img/gif/027.gif' />";
images[27] = "<img src='./img/gif/028.gif' />";
images[28] = "<img src='./img/gif/029.gif' />";
images[29] = "<img src='./img/gif/030.gif' />";
images[30] = "<img src='./img/gif/031.gif' />";
images[31] = "<img src='./img/gif/032.gif' />";
images[32] = "<img src='./img/gif/033.gif' />";
images[33] = "<img src='./img/gif/034.gif' />";
images[34] = "<img src='./img/gif/035.gif' />";
images[35] = "<img src='./img/gif/036.gif' />";
images[36] = "<img src='./img/gif/037.gif' />";
images[37] = "<img src='./img/gif/038.gif' />";
images[38] = "<img src='./img/gif/039.gif' />";
images[39] = "<img src='./img/gif/040.gif' />";
images[40] = "<img src='./img/gif/041.gif' />";
images[41] = "<img src='./img/gif/042.gif' />";
images[42] = "<img src='./img/gif/043.gif' />";
images[43] = "<img src='./img/gif/044.gif' />";
images[44] = "<img src='./img/gif/045.gif' />";
images[45] = "<img src='./img/gif/046.gif' />";
images[46] = "<img src='./img/gif/047.gif' />";
images[47] = "<img src='./img/gif/048.gif' />";
images[48] = "<img src='./img/gif/049.gif' />";
images[49] = "<img src='./img/gif/050.gif' />";
images[50] = "<img src='./img/gif/051.gif' />";
images[51] = "<img src='./img/gif/052.gif' />";
images[52] = "<img src='./img/gif/053.gif' />";
images[53] = "<img src='./img/gif/054.gif' />";
images[54] = "<img src='./img/gif/055.gif' />";
images[55] = "<img src='./img/gif/056.gif' />";
images[56] = "<img src='./img/gif/057.gif' />";
images[57] = "<img src='./img/gif/058.gif' />";
images[58] = "<img src='./img/gif/059.gif' />";
images[59] = "<img src='./img/gif/060.gif' />";
images[60] = "<img src='./img/gif/061.gif' />";
images[61] = "<img src='./img/gif/062.gif' />";
images[62] = "<img src='./img/gif/063.gif' />";
images[63] = "<img src='./img/gif/064.gif' />";
images[64] = "<img src='./img/gif/065.gif' />";
images[65] = "<img src='./img/gif/066.gif' />";
images[66] = "<img src='./img/gif/067.gif' />";
images[67] = "<img src='./img/gif/068.gif' />";
images[68] = "<img src='./img/gif/069.gif' />";
images[69] = "<img src='./img/gif/070.gif' />";
images[70] = "<img src='./img/gif/071.gif' />";
images[71] = "<img src='./img/gif/072.gif' />";
images[72] = "<img src='./img/gif/073.gif' />";
images[73] = "<img src='./img/gif/074.gif' />";
images[74] = "<img src='./img/gif/075.gif' />";
images[75] = "<img src='./img/gif/076.gif' />";
images[76] = "<img src='./img/gif/077.gif' />";
images[77] = "<img src='./img/gif/078.gif' />";
images[78] = "<img src='./img/gif/079.gif' />";
images[79] = "<img src='./img/gif/080.gif' />";
images[80] = "<img src='./img/gif/081.gif' />";
images[81] = "<img src='./img/gif/082.gif' />";
images[82] = "<img src='./img/gif/083.gif' />";
images[83] = "<img src='./img/gif/084.gif' />";
images[84] = "<img src='./img/gif/085.gif' />";
images[85] = "<img src='./img/gif/086.gif' />";
images[86] = "<img src='./img/gif/087.gif' />";
images[87] = "<img src='./img/gif/088.gif' />";
images[88] = "<img src='./img/gif/089.gif' />";
images[89] = "<img src='./img/gif/090.gif' />";
images[90] = "<img src='./img/gif/091.gif' />";
images[91] = "<img src='./img/gif/092.gif' />";
images[92] = "<img src='./img/gif/093.gif' />";
images[93] = "<img src='./img/gif/094.gif' />";
images[94] = "<img src='./img/gif/095.gif' />";
images[95] = "<img src='./img/gif/096.gif' />";
images[96] = "<img src='./img/gif/097.gif' />";
images[97] = "<img src='./img/gif/098.gif' />";
images[98] = "<img src='./img/gif/099.gif' />";

var img = Math.floor(Math.random() * images.length);
img = Math.floor(img);

// random text
Quotation = new Array(0)
Quotation[0] =
    "4 Kesalahan yang harus dihindari di bulan Ramadan: marah, tidur sepanjang hari, berpuasa tapi tidak shalat, tutur kata yang buruk.";
Quotation[1] =
    "4 minggu yang penuh rahmat, 30 hari yang bernilai ibadah, 720 jam yang penuh nuansa keagamaan, 43.000 menit yang penuh ampunan, 2.592.000 detik yang penuh kebahagiaan.";
Quotation[2] =
    "Ada dua kebahagiaan bagi orang yang berpuasa, yaitu kebahagiaan ketika berbuka puasa, dan kebahagiaan ketika nanti bertemu dengan Tuhannya. – Hadis";
Quotation[3] =
    "Allah tidak pernah mengharapkan kita menjadi sempurna selama Ramadhan, tetapi Dia mengharapkan kita untuk tetap terus berusaha.";
Quotation[4] =
    "Apabila salah seorang di antara kamu berpuasa, janganlah ia berkata kotor/keji dan berteriak-teriak. Apabila ada orang yang menghinanya atau mengajaknya bertengkar, maka katakanlah, Sesungguhnya aku sedang berpuasa. – Hadis";
Quotation[5] =
    "Bagi seorang muslim sejati, berakhirnya Ramadhan bukanlah akhir, tetapi awal dari perjalanan baru menuju surga.";
Quotation[6] =
    "Barang siapa memberi makan orang yang sedang berpuasa, maka baginya pahala seperti orang yang melakukan puasa tersebut, tanpa mengurangi pahala orang yang berpuasa itu sedikit pun juga. – Hadis";
Quotation[7] =
    "Barangsiapa yang berpuasa Ramadhan atas dasar iman dan semata-mata mengharap pahala dari Allah, maka akan diampuni dosanya yang telah lalu. – Hadis";
Quotation[8] = "Berdoalah.. ini adalah Ramadhan, bulan yang penuh dengan ampunan.";
Quotation[9] =
    "Bila ada langkah membekas lara, ada kata merangkai dusta, ada tingkah menoreh luka, Mohon maaf lahir dan batin. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[10] =
    "Bila hati saling terpaut, rasa cinta terjalin indah. Bila salah dan khilaf terjadi, mohon maaf lahir dan batin. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[11] =
    "Bulan Ramadhan adalah bulan yang di dalamnya diturunkan Al-Quran sebagai petunjuk bagi manusia dan penjelasan-penjelasan mengenai petunjuk itu dan sebagai pembeda (antara yang hak dan yang bathil). – (QS. Al-Baqarah: 185)";
Quotation[12] =
    "Bulan Ramadhan sudah di depan mata. Tak lama lagi kita akan berjumpa. Siapkan hati untuk mendekatkan diri pada-Nya. Marhaban ya Ramadhan. Mohon maaf lahir dan batin. Selamat menunaikan ibadah puasa.";
Quotation[13] =
    "Bulan suci Ramadhan sudah di depan mata, bulan yang penuh keberkahan, bulan yang penuh dengan ampunan. Perlu kesiapan mental yang matang dan kejernihan hati tuk menyambutnya. Sudilah kiranya, membuka pintu hati tuk menerima ucapan kami, Minal Aidin Wal Faidzin, mohon maaf lahir dan bathin. Semoga kita diberi kekuatan dan keringanan dalam menjalankan ibadah shaum.";
Quotation[14] =
    "Dalam kerendahan hati ada ketinggian budi. Dalam kemiskinan harta ada kekayaan jiwa. Hidup terasa indah jika ada maaf. Taqabalalalhu Minna Waminkum. Selamat menjalankan ibadah puasa.";
Quotation[15] =
    "Dalam kerendahan hati, ada ketinggian budi. Dalam kemiskinan harta, ada kekayaan jiwa. Hidup ini terasa indah jika ada maaf. Mohon maaf lahir dan batin. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[16] =
    "Dalam kesakitan, teruji kesabaran. Dalam perjuangan, teruji keikhlasan. Dalam ukhuwah, teruji ketulusan. Dalam tawakkal, terudi keyakinan. Hidup ini indah jika Allah menjadi tujuan. Marhaban ya Ramadhan. Mohon maaf lahir dan batin. Selamat menunaikan ibadah puasa.";
Quotation[17] =
    "Diawali dengan Bismillah, menyambut bulan penuh barokah. Mari tingkatkan keimanan dan takwa. Semoga diampunkan segala dosa. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[18] =
    "Gersang bumi tanpa hujan. Gersang akal tanpa ilmu. Gersang hati tanpa iman. Gersang jiwa tanpa amal. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[19] =
    "Hai orang-orang yang beriman, diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa. – (QS. Al-Baqarah: 183)";
Quotation[20] =
    "Jadikan Ramadhan kali ini sebagai titik balik dalam kehidupanmu. Bebaskan diri dari tipu daya dunia ini dan nikmati manisnya iman.";
Quotation[21] =
    "Jalani hidupmu seperti seolah-olah setiap harinya adalah Ramadhan, maka Akhirat akan menjadi hari rayamu.";
Quotation[22] = "Jangan menjadi hamba Ramadhan, jadilah hamba Allah, dan beristiqamahlah.";
Quotation[23] =
    "Jika hati seputih awan, jangan biarkan ia mendung. Jika hati seindah bulan, hiasi dengan senyuman. Marhaban ya Ramadhan. Mohon maaf lahir dan batin. Selamat menunaikan ibadah puasa.";
Quotation[24] =
    "Jika langkahku membekas lara, kataku merangkai dusta, lakuku menoreh luka, dari jeritan lubuk batinku, dengan ketulusan hatiku, kumohon maaf lahir dan bathinku. Selamat menjalankan ibadah puasa.";
Quotation[25] =
    "Jika semua harta adalah racun, maka zakatlah penawarnya. Jika seluruh umur adalah dosa, maka tobatlah obatnya. Jika seluruh bulan adalah noda, maka Ramadhanlah pemutihnya. Mohon maaf lahir dan batin. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[26] =
    "Jika setelah bulan Ramadhan kamu kembali menjalani kehidupan yang penuh dosa, maka sesungguhnya kamu tidak mendapatkan apapun dari puasamu kecuali hanya rasa lapar.";
Quotation[27] =
    "Kalau puasa cuma menahan lapar dan haus, maka sama saja seperti mengganti waktu makan.";
Quotation[28] =
    "Kerinduan pada bulan suci Ramadhan kan segera terobati. Tak lama lagi bulan Ramadhan kan tiba. Ampunilah segala dosa hamba dan semoga kami selalu berada dalam limpahan rahmat-Mu";
Quotation[29] =
    "Ketika datang bulan Ramadhan, maka pintu-pintu surga akan dibuka, pintu-pintu neraka ditutup, dan setan-setan dibelenggu. – Hadis";
Quotation[30] =
    "Ketika datang bulan Ramadhan, maka pintu-pintu surga akan dibuka, pintu-pintu neraka ditutup, dan setan-setan dibelenggu. Mohon maaf lahir dan batin. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[31] =
    "Manusia tak pernah lari dari salah dan khilaf, karena manusia tidaklah sempurna. Di bulan yang suci ini, marilah bermaafan. Agar tiada dendam dan dengki. Mohon maaf lahir dan batin. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[32] =
    "Manusia tak pernah luput dari salah dan khilaf, karena manusia bukan makhluk sempurna. Di bulan yang suci ini, marilah bermaafan. Agar tak ada dendam dan dengki. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[33] =
    "Marhaban ya Ramadhan, bulan suci kembali tiba. Saat tepat menyucikan diri dari segala dosa. Mohon maaf lahir dan batin. Selamat menunaikan ibadah puasa.";
Quotation[34] =
    "Marhaban ya Ramadhan, bulan suci penuh berkah telah tiba. Saatnya untuk lebih mendekatkan diri pada-Nya, menjauhi keburukan, memperbanyak ibadah. Dengan segala kerendahan hati, mohon maaf lahir dan batin. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[35] = "Ya Allah, terimalah puasa kami di bulan Ramadhan yang indah ini. Amiin.";
Quotation[36] =
    "Matikan TV, makan secukupnya, gunakan SOSIAL MEDIA dengan bijak, baca QURAN sehari-hari, lebih banyak BERIBADAH, tingkatkan DOA. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[37] =
    "Mengingat kata yang salah, hati yang berprasangka, janji yang terlupakan, sikap dan sifat yang menyakitkan, mohon maaf lahir dan batin. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[38] =
    "Mengingat kata yang salah. Hati yang berprasangka. Janji yang terlupakan. Sikap dan sifat yang menyakitkan. Di hari ini izinkanlah aku mengucap, mohon maaf lahir dan batin. Marhaban ya Ramadhan.";
Quotation[39] =
    "Meski sekarang zaman sedang edan, namun ibadah di bulan ramadhan harus tetap habis-habisan, karena tahun depan belum tentu merasakan.";
Quotation[40] =
    "Orang miskin adalah dia yang meninggalkan ramadhan masih sama seperti sebelumnya.";
Quotation[41] =
    "Perkataan yang indah adalah ALLAH. Lagu yang merdu adalah ADZAN. Media yang terbaik adalah AL-QUR’AN. Senam yang sehat adalah SHALAT. Diet yang sempurna adalah PUASA. Kebersihan yang menyegarkan adalah WUDHU. Perjalanan yang indah adalah HAJI. Khayalan yang baik adalah ingat akan DOSA & TAUBAT. Semoga bulan suci ini membawa iman dan takwa. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[42] =
    "Puasa adalah perisai dan bukan pedang. Digunakan untuk menahan diri, bukan untuk menyerang.";
Quotation[43] =
    "Puasa adalah perisai, yang akan melindungimu dari api neraka dan menjagamu dari perbuatan dosa. – Hadis";
Quotation[44] =
    "Puasa itu hanya 1% untuk menahan diri dari makan dan minum, 99% sisanya untuk membawa hati dan jiwamu semakin dekat kepada Allah.";
Quotation[45] = "Ramadhan adalah kesempatan untuk membangun imanmu.";
Quotation[46] = "Ramadhan adalah waktu yang sangat baik untuk berhenti dari kebiasaan buruk.";
Quotation[47] = "Ramadhan adalah waktunya mengosongkan perut untuk memberi makan ruhanimu.";
Quotation[48] =
    "Ramadhan bagaikan bunga yang sangat langka, yang mekar hanya setahun sekali, dan saat kamu mulai mencium harumnya, ia menghilang selama satu tahun lagi.";
Quotation[49] =
    "Ramadhan bukanlah tentang berhenti dari kebiasaan buruk untuk sementara waktu. Ramadhan adalah titik awal untuk menjadi seorang Muslim yang lebih baik dan berusaha untuk terus selamanya menjadi baik.";
Quotation[50] =
    "Ramadhan is a month of Allah. Whose beginning is mercy. Whole middle is forgiveness. Whose end is freedom from fire. Ramadan Mubarak.";
Quotation[51] =
    "Ramadhan itu ibarat hujan… ia memelihara dan menyuburkan benih-benih perbuatan baik.";
Quotation[52] =
    "Ramadhan itu seperti teman. Kamu mungkin berjumpa dengannya hari ini, tapi belum tentu kamu bisa berjumpa lagi dengannya di lain waktu.";
Quotation[53] =
    "Ramadhan itu waktunya untuk membersihkan diri dari dosa, bukan untuk menurunkan berat badan.";
Quotation[54] =
    "Ramadhan semakin berlalu, akan tetapi masjid semakin kelabu, pusat perbelanjaan dan restoran semakin laku.";
Quotation[55] = "Ramadhan, biarkan bulan ini menyembuhkanmu.";
Quotation[56] =
    "Ramadhan.. akan segera tiba. Mari persiapkan pikiran, tubuh dan jiwa untuk menyambut bulan suci ini dan raihlan manfaatnya semaksimal mungkin.";
Quotation[57] = "Ramadhan: mengokohkan imanmu, menyembuhkan hatimu.";
Quotation[58] =
    "Sambutlah bulan Ramadhan dengan hati yang penuh dengan kedamaian, harmoni dan sukacita. Semoga rahmat ilahi dari Allah senantiasa melindungi dan membimbingmu.";
Quotation[59] =
    "Satu tahun tak terasa, Ramadhan pun telah kembali. Semoga yang dilalui dan dilakukan menjadi kebaikan di bulan suci ini. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[60] =
    "Sebelum cahaya ilahi dipadamkan, sebelum langit runtuh, sebelum pintu taubat ditutup, sebelum malaikat menjemput, sebelum Ramadhan tiba, mohon maaf lahir batin atas kesalahan yang pernah dilakukan. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[61] = "Selamat datang ramadhan… Allah beserta orang-orang yang bertakwa.";
Quotation[62] =
    "Selamat Datang Ramadhan… Berjalanlah dengan kerendahan hati, berbicara yang sopan, berpakaian yang rapi, berperilaku yang baik, berdoa dengan penuh perhatian dan dermawan dalam bersedekah. Semoga Allah memberkahi dan melindungi kalian semua.";
Quotation[63] =
    "Selamat menjalankan ibadah puasa, jangan jadikan puasa alasan untuk bemalas-malasan tetap semangat menjalankan rutinitas kita.";
Quotation[64] =
    "Selembut embun di pagi hari, tengadah tangan sepuluh jari, ucapkan salah setulus hati, mari kita bersama berbenah diri, di bulan Ramadhan yang suci. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[65] =
    "Seluruh alam berdzikir menyambut bulan penuh berkah. Kemuliaan bulan seribu bulan. Saat Allah memberikan ampunan. Marhaban ya Ramadhan. Mohon maaf lahir dan batin. Selamat menunaikan ibadah puasa.";
Quotation[66] =
    "Seluruh amal perbuatan anak Adam adalah untuknya sendiri kecuali puasa, sesungguhnya ia untuk-Ku dan Aku-lah yang akan memberikan balasannya. – Hadis";
Quotation[67] =
    "Semoga Ramadhan kali ini mencerahkanmu dan memperjelas pemahaman serta penilaianmu untuk bisa membedakan antara yang benar dan yang salah, antara yang hak dan yang batil. Semoga kamu menjalani Ramadhan yang penuh berkah.";
Quotation[68] =
    "Setetes embun di pagi hari jatuh di atas bunga melati. Di bulan suci ini, inilah waktunya untuk memperbaiki diri. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[69] =
    "Setitik tinta jadi noda. Setitik salah jadi dosa. Bulan penuh berkah segera tiba. Mari tekun ibadah di bulan puasa. Marhaban ya Ramadhan. Mohon maaf lahir dan batin. Selamat menunaikan ibadah puasa.";
Quotation[70] =
    "Siang diisi kebaikan, malam belajar Al-Qur’an. Ramadhan jadi penerang, hati yang mulai remang-remang. Marhaban ya Ramadhan. Mohon maaf lahir dan batin. Selamat menunaikan ibadah puasa.";
Quotation[71] =
    "Tak ada kata seindah zikir. Tak ada bulan seindah Ramadan. Izinkan kedua tangan bersimpuh maaf, untuk lisan yang tak terjaga, janji yang terabaikan, hati yang selalu berprasangka, serta sikap yang pernah menyakitkan. Mohon maaf lahir dan batin. Selamat menunaikan ibadah puasa.";
Quotation[72] =
    "Tak ada seorangpun yang bisa pergi ke mana pun ia mau tanpa adanya persiapan, dan tak ada seorangpun yang mengundang tamu tanpa mempersiapkan diri untuk menyambutnya. Maka sama halnya dalam menyambut Ramadhan, bulan puasa, seseorang harus mempersiapkan diri.";
Quotation[73] =
    "TAQWA adalah tujuan akhir dari persiapan Ramadhan kita, supaya kita termasuk ke dalam golongan orang-orang yang saleh, untuk saat ini dan selamanya.";
Quotation[74] =
    "Terselip khilaf pada canda, ada luka tergores pada tawa, terbelit pilu pada tingkah, tersinggung rasa dalam bicara. Mari kita saling memaafkan di bulan suci Ramadhan ini. Semoga kita tetap setia dalam satu jalur, satu doa, satu tujuan: menggapai ridha Allah SWT.";
Quotation[75] =
    "Tiada bulan seagung ini. Tiada bulan semulia ini. Tiada bulan seberkah ini. Ramadhan penuh berkah dan maghfirah. Marhaban ya Ramadhan. Mohon maaf lahir dan batin. Selamat menunaikan ibadah puasa.";
Quotation[76] =
    "Tiada kebahagiaan tanpa syukur. Tiada rasa syukur tanpa sabar. Tiada sabar tanpa maaf. Marhaban ya Ramadhan. Mohon maaf lahir dan batin. Selamat menunaikan ibadah puasa.";
Quotation[77] =
    "Tiada kemenangan tanpa zikrullah. Tiada amal tanpa keikhlasan. Tiada ampunan tanpa maaf sesama. Marhaban ya Ramadhan. Selamat menunaikan ibadah puasa.";
Quotation[78] =
    "Tiga doa yang tidak tertolak; doa orang tua terhadap anaknya, doa orang yang sedang berpuasa dan doa seorang musafir. – Hadis";
Quotation[79] =
    "Tuhan yang engkau sembah di bulan Ramadhan adalah Tuhan yang sama yang engkau berpaling di bulan-bulan selainnya. – Sheikh Abu Abdisalam";
Quotation[80] =
    "Wishing you 1 month of Ramadhan, 4 weeks of barkat, 30 days of forgiveness, 720 hours of guidance, 43200 minutes of purification, 2592000 seconds of noor. Ramadan Mubarak.";
Quotation[81] =
    "Ya Allah, izinkan kami untuk menjumpai bulan Ramadhan, memanfaatkannya, menggunakannya untuk mendapatkan ridha dan rahmat-Mu, dan mendapatkan pembebasan dari siksa api neraka. – dr. Bilal Philips";

var text = Math.floor(Math.random() * Quotation.length);
text = Math.floor(text);


// random child
var child = new Array;
child[0] = "<img src='./img/child/1.gif' />";
child[1] = "<img src='./img/child/2.gif' />";
child[2] = "<img src='./img/child/3.gif' />";
child[3] = "<img src='./img/child/4.gif' />";
child[4] = "<img src='./img/child/5.gif' />";
child[5] = "<img src='./img/child/6.gif' />";
child[6] = "<img src='./img/child/7.gif' />";
child[7] = "<img src='./img/child/8.png' />";

var family = Math.floor(Math.random() * child.length);
family = Math.floor(family);