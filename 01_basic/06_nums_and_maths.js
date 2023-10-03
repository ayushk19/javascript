const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.89343

// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++  Maths ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // gives value in range 0 - 1
console.log((Math.random()*10) + 1);    // we shift value to left
console.log(Math.floor((Math.random()*10) + 1)); // we want value greater than 1 so we add one here that it not give 0

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// max - min for finding range and +1 for neglect zero and add min for value in given range