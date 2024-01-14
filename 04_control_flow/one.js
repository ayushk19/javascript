//if - else

const temperature = 10

// if (temperature < 40){
//     console.log("less than 40")
// } else{
//     console.log("greater than 40")
// }

// console.log("Execute")

//comparison operators: <, >, <=, >=, ==, !=, ===, !==, &&, ||

const score = 200

// if (score > 100){
//     let power = "fly"     //use const or let only .... var is fully global scope
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");   //unreadable code don't use!

// Nested if-else-if
// if (balance < 500){
//     console.log("less than 500")
// } else if (balance < 750){
//     console.log("less than 750")
// } else if (balance < 900){
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }

const UserLoggedIn = true
const UserDebitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User logged In")
}

if (UserLoggedIn && UserDebitCard){
    console.log("Allow to buy course")
}
