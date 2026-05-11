// Function
function SumNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

function Greeting(fullName: string): void {
  console.log(`Hello, ${fullName}`);
}

const MultiplyNumbers = function (num1: number, num2: number) {
  return num1 * num2;
};

// Array
const fruits: string[] = ['Apel', 'Nanas', 'Semangka'];
const numbers: number[] = [1, 2, 3, 4, 5];
const mixed: [string, number, number, boolean, string] = [
  'Apel',
  35000,
  100,
  true,
  'AVAILABLE',
];

// Object

// 01. Interface
interface Student {
  fullName: string;
  address: string;
  isGraduated?: boolean;
}

// 02. Type Alias
type Student01 = {
  fullName: string;
  address: string;
  isGraduated?: boolean;
};

const student: Student = {
  fullName: 'Defryan',
  address: 'BSD',
  //   isGraduated: true,
};

// student.score = 100; `score` is not declared on interface, Error!

const student01: Student01 = {
  fullName: 'Immanuel',
  address: 'BSD',
  isGraduated: true,
};

// student.score = 100;

// Generic Data Type
function GetFirstItemArray<T>(arrRandom: T[]): T {
  return arrRandom[0];
}

GetFirstItemArray(['Hello', 'World']);
GetFirstItemArray([1000, 10, 1]);

{
  type Student01<T> = {
    fullName: string;
    address: string;
    isGraduated?: T;
  };

  const student01: Student01<boolean> = {
    fullName: 'Immanuel',
    address: 'BSD',
    isGraduated: true,
  };

  const student02: Student01<undefined> = {
    fullName: '',
    address: '',
    isGraduated: undefined,
  };
}
