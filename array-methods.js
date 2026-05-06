const cars = ['Toyota', 'Daihatsu', 'Wuling'];
// .push        : Menambahkan item baru di index terakhir
cars.push('Honda');
console.log(cars);

// .unshift     : Menambahkan item baru di index awal
cars.unshift('BYD');
console.log(cars);

// .shift       : Menghapus item di index awal
cars.shift();
console.log(cars);

// .pop         : Menghapus item di index terakhir
cars.pop();
console.log(cars);

// .slice       : Memotong
const alphabets = ['a', 'b', 'c', 'd'];
console.log(alphabets.slice(2, 3));

// .includes    : Mencari item didalam array (menghasilkan nilai boolean)
const products = ['Kaos', 'Sepatu', 'Celana'];
console.log(products.includes('Kaos'));
console.log(products.includes('Jaket'));

// .indexOf     : Mencari index suatu item didalam array
// .lastIndexOf : Mencari index suatu item yang paling akhir didalam array
const menus = ['Americano', 'Milk Tea', 'Americano', 'Bubble Tea', 'Americano'];
console.log(menus.indexOf('Americano'));
console.log(menus.lastIndexOf('Americano'));

// .splice      : .splice(startIndex, totalDataToDelete, newData, newData, newData, ...)
const programsPurwadhika = ['Web Dev', 'Dig Marketing', 'Data Science'];
programsPurwadhika.splice(1, 2);
console.log(programsPurwadhika);

{
  const fruits = ['Apel', 'Nanas', 'Mangga', 'Alpukat', 'Nangka'];
  fruits.splice(0, 2, 'Kelengkeng', 'Anggur', 'Pisang');
  console.log(fruits);
}

{
  const menus = ['Ayam Goreng', 'Steak', 'Burger'];
  menus.splice(1, 2, 'Milk Tea', 'Boba');
  console.log(menus);
}
