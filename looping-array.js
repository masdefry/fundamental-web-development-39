const fruits = [
  'Apel',
  'Anggur',
  'Nanas',
  'Nangka',
  'Jeruk',
  'Kelengkeng',
  'Mangga',
];

fruits[0];
fruits[1];
fruits[2];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // fruits[0] -> Apel; fruits[1] -> Anggur; fruits[2] -> Nanas;
}

for (let bebas of fruits) {
  console.log(bebas);
}

fruits.forEach((item, index) => {
  console.log(index);
  console.log(item);
});

{
  const fruits = [
    'Apel',
    'Anggur',
    'Nanas',
    'Nangka',
    'Jeruk',
    'Kelengkeng',
    'Mangga',
  ];

  const filteredFruits = fruits.filter((item, index) => {
    // return item === 'Apel' || item === 'Mangga';
    if(item === 'Apel') return item; 
    if(item === 'Durian') return item;
  });
  console.log(filteredFruits);
}
