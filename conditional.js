/* if */
const age = 20;

if (age >= 17) {
  console.log('You can create an identity card');
}

/* if-else */
const examScore = 80;

if (examScore >= 85) {
  console.log('Exam score is passed');
} else {
  console.log('Exam score is not passed');
}

/* if-else if-else */
const finalProjectScore = 95;

if (finalProjectScore > 90) {
  console.log('Grade: A');
} else if (finalProjectScore > 85) {
  console.log('Grade: B');
} else if (finalProjectScore > 70) {
  console.log('Grade: C');
} else {
  console.log('Grade: D');
}

/* switch-case */
const grade = 'A';

switch (grade) {
  case 'A':
    console.log('Excellent');
    break;
  case 'B':
    console.log('Good');
    break;
  case 'C':
    console.log('Average');
    break;
  default:
    console.log('Poor');
}

/* Ternary Operator */
{
  const age = 20;

  if (age >= 17) {
    console.log('You can create an identity card');
  } else {
    console.log('You cannot create an identity card');
  }

  age >= 17
    ? console.log('You can create an identity card')
    : console.log('You cannot create an identity card');
}

{
  const finalProjectScore = 95;

  if (finalProjectScore > 90) {
    console.log('Grade: A');
  } else if (finalProjectScore > 85) {
    console.log('Grade: B');
  } else if (finalProjectScore > 70) {
    console.log('Grade: C');
  } else {
    console.log('Grade: D');
  }

  finalProjectScore > 90
    ? console.log('Grade: A')
    : finalProjectScore > 85
      ? console.log('Grade: B')
      : finalProjectScore > 70
        ? console.log('Grade: C')
        : console.log('Grade: D');
}
