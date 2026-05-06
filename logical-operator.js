/*
    LOGICAL OPERATOR:
    && AND
    || OR 
    !  NOT
*/

/*
    && AND:
    Apabila terdapat 1 kondisi bernilai false, maka hasil akhirnya akan false
*/
console.log(10 == 10 && 1 === '1'); // TRUE && FALSE -> FALSE
console.log(10 >= 10 && 1 <= 1); // TRUE && TRUE -> TRUE

/*
    || OR:
    Apabila terdapat 1 kondisi bernilai true, maka hasil akhirnya akan true
*/
console.log(10 == 10 || 1 === '1'); // TRUE || FALSE -> TRUE
console.log(10 >= 10 || 1 <= 1); // TRUE || TRUE -> TRUE
console.log(1 === '1' || 1 > 1000); // FALSE || FALSE -> FALSE

/*
    ! NOT: 
    Negasi (kebalikan nilai)
*/
console.log(!(1 === '1')); // !FALSE -> TRUE
console.log(!(1 == '1') || '3' === Number('3') || !('abc' === 'ABC'.toLowerCase())); // FALSE || FALSE || FALSE -> FALSE