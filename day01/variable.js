/*
    VARIABLE    : Container untuk menyimpan data

    Syntax:

        var variableName;
        let variableName;
        const variableName;
*/

var fullname = 'M Defryan';
var score = 100;
var isGraduated = true;
console.log(fullname);
console.log(score);
console.log(isGraduated);

var text = 'Halo Purwadhika';
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);

/* Variables Declaration Rules */
// 1. Penamaan variable harus jelas
var stadiumName = 'Ahmad Yani';

// 2. camelCase, snake_case, PascalCase
var studentWebDevelopment = 'Farhan';
var student_web_development = 'Immanuel';
var StudentWebDevelopment = 'Aboy';

// 3. Karakter pertama tidak boleh diawali dengan angka / spesial karakter
// var 5tudent;
// var @email;
// var *stars;

// 4. Nama variable tidak boleh sama dengan syntax Javascript
// var var;
// var function;

/* 
    var x let x const 
    
                                            var             let             const
    Nama variable boleh duplikat?*           v               x                x
    Isi variable boleh diubah?               v               v                x 
    Apakah variable memiliki aturan scope?   x               v                v
*/

var fullname = 'Defryan';
var fullname = 'Tridya';
console.log(fullname);

// const lastname = 'Tridya';
// const lastname = 'Defryan';
// console.log(lastname);

// const point = 100; 
// point = 1; // update data variable
// console.log(point);


var school = 'Purwadhika'; 
{
    console.log(school);
}