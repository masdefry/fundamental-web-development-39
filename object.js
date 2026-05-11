const user = {};

const profile = new Object();

const User = {
  fullName: {
    firstName: 'Muhammad',
    lastName: 'Defryan',
  },
  email: 'defryan@gmail.com',
  password: 'abc12345',
  address: {
    detail: 'Green Office Park',
    streetName: 'Jl. BSD City',
    city: 'Tangerang Selatan',
  },
  greet() {
    console.log('Hello, World!');
  },
};

console.log(User);
console.log(User.fullName.firstName);
console.log(User.fullName.lastName);
console.log(User.email);
console.log(User.password);
console.log(User.address.detail);
User.greet();

// const fruits = [['Apel', 25000, 1000]];

const student = {
  fullName: 'Immanuel',
  address: 'BSD',
};

student.hobby = 'Ngoding';
student['examScore'] = 100;
console.log(student);
console.log(student['fullName']);

const student01 = {
  fullName: '',
  address: {
    detail: {
      city: 'Bogor',
    },
  },
};

console.log(student01.address); // {}
console.log(student01?.detail?.address);
console.log(student01?.fullName);

const student02 = {
  biodata: {
    fullName: {
      firstName: '',
      lastName: '',
    },
    hobby: '',
    greet() {},
  },
  address: {
    detail: {
      city: 'Bogor',
    },
  },
};

console.log(student02.biodata);
console.log(student02.biodata.fullName.firstName);
console.log(student02.biodata.fullName.lastName);
console.log(student02.biodata.hobby);
console.log(student02.biodata.greet());
console.log(student02.biodata.fullName);

// Destructure Array & Object
const fruits = ['Apel', 'Anggur', 'Nanas'];

const [a, b, c] = fruits;
console.log(a);
console.log(b);
console.log(c);

{
  const products = [
    ['Kaos', 100000, 500],
    ['Celana', 150000, 700],
  ];
  const [[a, b, c], [d, e, f]] = products;

  console.log(a);
  console.log(b);
  console.log(c);
}

const userAccount = {
  username: 'defryan',
  email: 'defryan@yahoo.com',
};

const { email, username } = userAccount;
console.log(username);
console.log(email);

// Spread Operator
const firstGroup = [1, 2, 3];
const secondGroup = [4, 5, 6];
const allGroup = [...firstGroup, ...secondGroup];
console.log(allGroup);

const firstData = {
  name: 'David',
};

const secondData = {
  email: 'david@gmail.com',
};

const allData = {
  ...firstData,
  ...secondData,
};

console.log(allData);

const products = {
    name: 'Kaos', 
    price: 150000, 
    stock: 1000
};

const newProducts = {
    ...products, 
    price: 200000
};

console.log(newProducts)


// This Keyword 

{
    const person = {
        firstName: 'Frengky', 
        lastName: 'Sihombing', 
        greet(){
            console.log(`Hello, ${this.firstName} ${this.lastName}`)
        }, 
        action(number){
            if(number === 1){
                this.greet();
            }
        }
    }

    person.action(1)
}