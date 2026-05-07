// Split Text
function SplitText(text) {
  let temporaryText = ''; // Hello
  const splittedText = [];
  for (let item of text) {
    if (item !== ' ') {
      temporaryText += item;
    } else {
      splittedText.push(temporaryText);
      temporaryText = '';
    }
  }

  if (temporaryText) splittedText.push(temporaryText);

  return splittedText;
}

console.log(SplitText('Hello World!'));
console.log(SplitText('Muhammad Defryan'));

// Remove Odd Numbers
const numbers = [1, 2, 3, 4, 5];
numbers.filter((item, index) => {});
const evenNumbers = numbers.filter((item) => {
  return item % 2 === 0;
});
console.log(evenNumbers);

// FizzBuzz
function FizzBuzz(totalLooping) {
  const result = [];

  for (let i = 1; i <= totalLooping; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  return result.join(', ');
}

console.log(FizzBuzz(10));
FizzBuzz(100);
