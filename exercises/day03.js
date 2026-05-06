const number = 150;
let isPrime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${number} is Prime`);
} else {
  console.log(`${number} not Prime`);
}
