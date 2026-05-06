/*
    Looping For
*/
for(let i=0; i<=3; i++){
    console.log('Hello'); // 4x
}

/*
    Looping While
*/
let start = 0; // 0 -> 1 -> 2 -> 3 -> 4

while(start <= 3){ // 4 <= 3? FALSE
    console.log('Hai') // 4x
    start++
};


/*
    Looping Do While
*/
let count = 0; // 0 -> 1 -> 2 -> 3 -> 4

do{
    console.log('Purwadhika'); // 4x
    count++
}while(count <= 3);

/*
    Break & Continue

    Break: Menghentikan looping
    Continue: Meng-skip 1x looping
*/

for(let i=1; i<10; i++){
    console.log(i);
    if(i == 5) break; 
}

for(let i=1; i<10; i++){
    if(i == 5) continue; 
    console.log(i);
}