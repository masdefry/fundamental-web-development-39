// Declarative Function
function first() {
  // Block of code
}

// Expression Function
const second = function () {
  // Block of code
};

function looping() {
  for (let i = 0; i < 6; i++) {
    console.log('Hello, World!');
  }
}

looping();
second();

// Function Hoisting
greeting();
function greeting() {
  console.log('Hello, Defryan!');
}
greeting();

/*
welcome(); // Error, cannot access welcome before initialization
const welcome = function () {
  console.log('Welcome, User!');
};
*/

// Function with Parameters (Params)
{
  function greeting(name = 'Anonymous', address = 'Unknown') {
    console.log(`Hello, ${name}. Address, ${address}`);
  }

  let students = ['Defryan', 'Ivan', 'Farhan'];

  for (let item of students) {
    greeting(item);
  }

  greeting('Defryan', 'Bogor');
  greeting('Ivan', 'BSD');
  greeting();
}

{
  function greeting(name = 'Anonymous', address = 'Unknown') {
    console.log(`Hello, ${name}. Address, ${address}`);
  }

  let students = ['Defryan', 'Ivan', 'Farhan'];

  for (let item of students) {
    greeting(item, 'Unknown', 'Unknown'); // greeting('Defryan')
  }
}

// Function with Return
function Greeting() {
  const text = 'Hello, World!';

  return text;
}

console.log(Greeting());
let duplicateText = Greeting(); // 'Hello, World!';
console.log(duplicateText);



// Function with Rest Paremeters
function myFunc(data1, data2, ...data){
    console.log(data1)
    console.log(data2)
    console.log(data)
};

myFunc('Apel', 'Anggur', 'Jeruk', 'Nanas');
myFunc('Apel', 'Anggur', 'Jeruk', 'Nanas', 'Mangga', 'Pisang', 'Nangka');



// Arrow Function
const myFunction = () => {
    console.log('My Function')
}