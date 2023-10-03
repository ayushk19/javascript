// primitive

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

let name = "Ayush"  //String
const score = 100   //Number
const scoreValue = 200.3    //Number

const isLoggedIn = false    //Boolean
const outsideTemp = null    //object
let userEmail;  //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId); //false

// Reference (Non premitive)

// Array, Object, Function

const cars = ['Lambo', 'Mercedes', 'BMW'];
let myObj = {
    name: 'Ayush',
    age: 22
}

const myFunction = function(){
    console.log("Hello! World");
}

// console.log(typeof myFunction)  // function
// console.log(typeof cars)    //Object

// ****************************************************

// Stack (Primitive) Call by value 
// Heap (Non primitive) call by reference

let myname = "Ayush"

let anothername = myname
anothername = "Ayu"

console.log(myname);
console.log(anothername);

let user = {
    email: "user@mail.com",
    upi: "UPIa@ybl"
}

let userSecond = user
userSecond.email = "ayu@mail.com"

console.log(user.email);
console.log(userSecond.email);