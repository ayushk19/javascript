// array 

//differnt types for declaring an array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ['Krishna', "Hanuman"]
const myArr2 = new Array(1, 2, 3, 6, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)    // push value at last in array
// myArr.push(7)
// myArr.pop()      // remove value from last in array

// myArr.unshift(9) //shift value to right ... add 9 in starting
// myArr.shift()    //shift value to left ... remove value from starting

// console.log(myArr.includes(9)); // return true or false
// console.log(myArr.indexOf(3));  //retunr index of given value....if not present return -1

const newArr = myArr.join() // return array in form of string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);  // return string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // take out the given range value without effecting original array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // remove the given value from original array
console.log("C ", myArr);
console.log(myn2);