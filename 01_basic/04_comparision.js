// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// above having same datatypes both side so we can compare like this

// console.log("2" > 1);    //true
// console.log("2" < 1);    //false

// console.log(null > 0);
// console.log(null == 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined < 0);

/*overall don't use this type of comparision it sometimes gives you non * favorable result because of different datatypes value you compared 
*/

// use === for strictly checking both value and data types

console.log("2" === 1); // false
console.log(1 === 1);   // true