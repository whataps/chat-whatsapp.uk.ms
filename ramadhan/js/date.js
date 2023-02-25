// date
Hari = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu");
Bulan = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus",
    "September", "Oktober", "November", "Desember");
tanggal = new Date();
tahun = tanggal.getYear();
if (tahun < 1000) tahun += 1900;
document.write(Hari[tanggal.getDay()] + ", " + tanggal.getDate() + " " + Bulan[tanggal.getMonth()] + " " + tahun);