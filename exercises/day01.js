/* Find Area Rectangle */
let width = 5;
let length = 3;
let areaRectangle = width * length;
let output = `Width = ${width}. Length = ${length}. Area = Width x Length = ${width} x ${length} = ${areaRectangle}`;
console.log(output);

/* Convert Days to Year, Month, Day */
const totalDays = 729;

const year = Math.floor(totalDays / 365);

let daysLeft = totalDays % 365;

const month = Math.floor(daysLeft / 30);

daysLeft = daysLeft % 30;

console.log(
  `Total Days: ${totalDays} = ${year} Year, ${month} Month, ${daysLeft} day`,
);

/* Get Difference Two Date */
let date1 = new Date('2026-05-01'); // Ms from 1970 - 01 Mei 2026
let date2 = new Date('2026-05-04'); // Ms from 1970 - 04 Mei 2026
console.log((date2 - date1) / (1000 * 3600 * 24));
