//dikerjakan dengan logika dan algoritma yang sama seperti diajarkan di bangku SD

let fpb1 = []; //array utk menampung faktor / angka yg bisa membagi num1
let fpb2 = []; //array utk menampung faktor / angka yg bisa membagi num2
let fpb3 = []; //array utk menampung angka yg bisa membagi kedua num1 dan num 2
let resultFPB = 0; //variable untuk menyimpan hasil fpb, supaya lebih rapi

let kpk1 = []; //array utk menampung faktor / angka hasil perkalian num1
let kpk2 = []; //array utk menampung faktor / angka hasil perkalian num2
let kpk3 = []; //array utk menampung angka yg sama dari hasil perkalian num1 maupun num2
let resultKPK = 0; //variable untuk menyimpan hasil kpk, supaya lebih rapi

let fpb_kpk = (num1, num2) => {

    //FPB
    for(i=1; i<=num1; i++) { //loop untuk mencari faktor num1
        if(num1 % i == 0){
            fpb1.push(i);
        }
    }

    for(i=1; i<=num2; i++) { //loop untuk mencari faktor num2
        if(num2 % i == 0){
            fpb2.push(i);
        }
    }

    for(i=0; i<fpb1.length; i++){ //loop untuk membandingkan angka pembagi yang sama
        if(fpb2.includes(fpb1[i])) {
            fpb3.push(fpb1[i]);
        }
    }

    resultFPB = fpb3[fpb3.length - 1]; //assign variable hasil dengan elemen terakhir karena terakhir artinya terbesar. FPB-> Faktor Persekutuan Besar


    //KPK
    for(i=1; i<=num2; i++){ //loop untuk mencari hasil perkalian/kelipatan num1
        kpk1.push(num1 * i);
    }

    for(i=1; i<=num1; i++){ //loop untuk mencari hasil perkalian/kelipatan num2
        kpk2.push(num2 * i);
    }

    for(i=0; i<kpk1.length; i++){ //loop untuk membandingkan hasil perkalian/kelipatan yang sama
        if(kpk2.includes(kpk1[i])) {
            kpk3.push(kpk1[i]);
        }
    }

    resultKPK = kpk3[0]; //assign variable hasil dengan elemen pertama karena yg dicari kelipatan terkecil. KPK -> Kelipatan Persekutuan Kecil

    //menampilkan hasil dengan console.log karena yang diminta seperti ini, bukan dengan fungsi return
    console.log(`FPB ${num1} dan ${num2} = ${resultFPB} 
KPK ${num1} dan ${num2} = ${resultKPK}`)

}

fpb_kpk(100,50) //test, hasilnya FPB = 50 dan KPK = 100.

//thank you
