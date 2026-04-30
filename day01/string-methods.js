// .slice(startIndex, endIndex) : Memotong karakter string
let description = 'Javascript is easy';
let sliceDescription = description.slice(0, 3); // Jav
console.log(sliceDescription);
console.log(description.slice(3, 6)); // asc
console.log(description.slice(14, 18));

// .replace(from, to)   : Merubah string
let fullName = 'Muhammad Defryan Muhammad';
console.log(fullName.replace('Defryan', 'ryan'));
console.log(fullName.replace('Muhammad', 'muhammad'));
console.log(fullName.replaceAll('Muhammad', 'muhammad'));

// .toUpperCase & .toLowerCase
let desc = 'aBc';
console.log(desc.toUpperCase());
console.log(desc.toLowerCase());

// .trim    : Menghapus spasi
let studentName = ' Muhammad Defryan ';
console.log(studentName);
console.log(studentName.trim());

// .indexOf & .lastIndexOf  : Mencari index suatu karakter
let alphabets = 'abcdefgb';
console.log(alphabets.indexOf('b'));
console.log(alphabets.lastIndexOf('b'));

// .substring
let caption = 'Typescript is Javascript';
console.log(caption.substring(0, 3));

// .slice vs .substring
let alfabet = 'abcdefg';
console.log(alfabet.slice(3, 0)); // strict
console.log(alfabet.substring(3, 0)); // swtiched (0, 3)
