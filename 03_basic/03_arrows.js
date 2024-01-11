// +++++ this ++++++
const user = {
    username: "Ayush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);    //this keyword is used for accessing/refer current context
        console.log(this); // refer current variable or value
    }
}

// user.welcomeMessage()
// user.username = "Raj"
// user.welcomeMessage()

// console.log(this)   //shows empty current context/value(object) if we present in node environment

/* but if we write 'console.log(this)' in browser it shows "window object"
*/

// function code(){
//     let username = 'ayu'
//     console.log(this)   //if we print this inside funtion it will shows many values.
//     console.log(this.username)  //return undefined because we use it only inside object not funtion
// }
// code()

//define funtion in other form
// const code = function(){
//     let username = 'ayu'
//     console.log(this.username)
// }

// ++++ Arrow function ++++

// const code = () => {
//     let username = 'ayu'
//     console.log(this.username)
// }
// code()

//basic syntax of arrow function
// () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//this called implicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)    //used mostly in react

const addTwo = (num1, num2) => ({username: "Ayu"})

console.log(addTwo(3, 4))