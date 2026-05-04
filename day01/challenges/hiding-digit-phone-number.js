/*
    Soal:
    Buatlah code untuk menyembunyikan 3 digit terakhir nomor hp dan diganti dengan karakter '*'.
    Contoh input/output:
        var phoneNumber = 628123456 →  "628123***"
        var phoneNumber = 6281234567897 →  "6281234567***"

    Ketentuan:
        - Variable input menyimpan nomor hp dengan tipe data number 
        - Output yang dihasilkan harus bertipe data string 
        - Jumlah digit nomor hp di rentan 9-13 digit (termasuk 62)
*/
let phoneNumber = 6281234567897;

//  Step-01 : Konversi number menjadi string
let phoneNumberStr = phoneNumber.toString();

let unhidePhoneNumber = phoneNumberStr.slice(0, phoneNumberStr.length - 3);
console.log(unhidePhoneNumber + '***');
console.log(`${unhidePhoneNumber}***`);

let name = 'Defryan';
let hobby = 'Bola';

console.log('Halo, nama saya: ' + name + '. Hobi saya adalah ' + hobby);
console.log(`Halo, nama saya ${name}. Hobi saya adalah ${hobby}`);
