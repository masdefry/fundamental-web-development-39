// Without Callback
function Sum(num1, num2) {
  return num1 + num2;
}

function Print(output) {
  console.log(output);
}

const result = Sum(3, 5); // 8
Print(result);

// With Callback

// 01. Indirect Callback
{
  function Sum(num1, num2, cb) {
    return cb(num1 + num2);
  }

  function Print(output) {
    console.log(output);
  }

  Sum(3, 10, Print);
}

// 02. Direct Callback
{
  function Sum(num1, num2, cb) {
    return cb(num1 + num2);
  }

  Sum(3, 10, function (output) {
    console.log(output);
  });

  Sum(3, 10, (output) => {
    console.log(output);
  });
}

const arr = [1, 2, 3];
arr.forEach(function (item, index) {});

// Delete Item Cart -> Get Item Cart
const carts = ['Kaos', 'Sepatu', 'Celana'];

function DeleteItem(cb) {
  setTimeout(() => {
    carts.pop();
    cb(); 
  }, 2000);
}

function GetItem() {
  setTimeout(() => {
    console.log(carts);
  }, 1000);
}

DeleteItem(
    () => DeleteItem(
        () => DeleteItem(
            GetItem
        )
    )
);
