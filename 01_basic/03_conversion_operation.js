let score = null

// console.log(typeof score);
// console.log(typeof(score)); //both are same

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "98" => 98
// "98avbv" => NaN
// true => 1; false => 0
// undefined => NaN
// null => 0

let loggedIn = "Ayush"

let booleanLoggedIn = Boolean(loggedIn)
// console.log(booleanLoggedIn)

// 1 => true; 0 => false
// "" => false; " " => true
// "Ayush" => true

let somenumber = 88

let stringNumber = String(somenumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operation ***************************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2);   //addition
// console.log(2-2);   //subtraction
// console.log(2*2);   //multiplication
// console.log(2**2);  //power
// console.log(2/2);   //divide
// console.log(2%2);   //remainder

let str1 = "Hello! "
let str2 = "Ayush"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);   // 12
// console.log(1 + "2");   // 12
// console.log("1" + 2 + 2);   //122
// console.log(1 + 2 + "2");   //32

// console.log( (2 + 6) * 5 / 9 + 4); //use parantheses for better understanding

// console.log(+true); //1
// console.log(+"");   //0

let gameCounter = 100
console.log(gameCounter++);     //100 it first print value then increment
console.log(++gameCounter);     //101 it first increment then print value