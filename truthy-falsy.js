console.log(Boolean('')); // FALSE
console.log(Boolean(0)); // FALSE
console.log(Boolean(null)); // FALSE
console.log(Boolean(undefined)); // FALSE
console.log(Boolean(NaN)); // FALSE

console.log(Boolean(' ')); // TRUE
console.log(Boolean('0')); // TRUE
console.log(Boolean(1)); // TRUE
console.log(Boolean([])); // TRUE
console.log(Boolean({})); // TRUE

// '' -> console.log('Username must be filled')
// 'ryandefryan' -> console.log('Username is valid')

let username = 'ryandefryan';

if (username) { // if(Boolean(username))
  console.log('Username is valid');
} else {
  console.log('Username must be filled');
}
