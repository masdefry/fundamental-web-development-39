// Declarative
class User {
  greeting() {
    console.log('Hello, World!');
  }
}

const user = new User();
user.greeting();

// Expression
// {
//     const User = class {
//         greeting(){
//             console.log('Hello, World!')
//         }
//     }
// }

class Student {
  fullName = '';

  constructor(_fullName) {
    this.fullName = _fullName;
  }
  greeting() {
    console.log(`Hello, ${this.fullName}`);
  }
}

const student = new Student('Muhammad Defryan');
console.log(student);
student.greeting();

// class Student {
//   fullName = [];

//   constructor(_fullName) {
//     this.fullName = _fullName;
//   }
//   greeting() {
//     console.log(`Hello, ${this.fullName}`);
//   }
// }

// const student = new Student(['Muhammad Defryan', 'Giffari', 'Farhan']);
// console.log(student);
// student.greeting();
