fungsi hitung () {
    //deklarasi 
    var harga = dokumen . getElementByld ("harga") . nilai ;
    var jumlah = dokumen . getElementByld ("jumlah") . nilai;

    //menghitung hasil
    var hasil = harga * jumlah;
    dokumen . getElementByld ("total") . nilai = hasil ;

    //hitung diskon
    jika ( hasil > 100000 ) {
        diskon = 0,2;
        dokumen . getElementByld ("diskon") . nilai = "20%";
    }  lain {
        diskon = 0;
        dokumen . getElementByld ("diskon") . nilai = "0" ;
    }

    //menghitung total yang harus dibayar sebelum diskon 
    var totalbayar = hasil * diskon;
    bayar = hasil - total bayar;
    dokumen . getElementByld . ("bayar") .nilai = bayar;
}