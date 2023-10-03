// String

const name = "Ayush"
const repoCount = 50

// console.log(name + repoCount + " Value");    not reliable its outdated use backtick

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ayush-ayu-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);   /// give length of string
// console.log(gameName.toUpperCase());    // make string in upper case
// console.log(gameName.charAt(2));    // see which character is in the given position
// console.log(gameName.indexOf('h')); // return index of given character

const myString = gameName.substring(0, 5)   // treated -ve value as 0
console.log(myString);

const newString = gameName.slice(-8, 3) // here treated -8 as 0
console.log(newString);

const newStringOne = "     Ayush    "
console.log(newStringOne);
console.log(newStringOne.trim());   // use for remove whitespaces

const url = "https://ayush.com/ayush%20kesarwani"

console.log(url.replace('%20', '-'));

console.log(url.includes('happy'));     // checks wheather the given string is inside the url or not in this case it return false

console.log(gameName.split('-'));

