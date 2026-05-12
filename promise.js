const carts = ['Kaos', 'Celana', 'Sepatu', 'Sandal'];

function DeleteItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (carts.length) {
        carts.pop();
        return resolve('Item deleted successfully.');
      }

      return reject('Deleted item failed.');
    }, 1000);
  });
}

function GetItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (carts.length) {
        return resolve({
            message: 'Item retrieved successfully.', 
            data: carts
        });
      }

      return reject('Carts already empty.');
    }, 2000);
  });
}

DeleteItem()
  .then((res) => {
    console.log('del-01')
    return DeleteItem();
  })
  .then((res) => {
    console.log('del-02');
    return DeleteItem()
  })
  .then((res) => {
    console.log('del-03')
    return GetItem()
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log('err:');
    console.log(err);
  });



// Async-Await 
async function main(){
    try {
      const res = await DeleteItem();  
      const res1 = await DeleteItem();
      const res2 = await DeleteItem();
      const res3 = await DeleteItem();
      const res4 = await GetItem();
    } catch (error) {
       console.log(error); 
    }
}

main();







// Challenge.
// 01. Apa itu `fetch`? Promise based, fungsinya untuk melakukan http request ke server
// 02. Gunakan `fetch` untuk melakukan pengambilan data ke URL API berikut:
//     https://jsonplaceholder.typicode.com/users

async function fetchUsers(){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); // response JSON
    const users = await res.json(); // .json() metode untuk merubah json menjadi object Javascript
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();