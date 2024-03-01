// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User("ayu", "ayu@mail.com", "123")

console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

//behind the scene -- if classes is not available in js then we write the above code like this

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const user = new User("ayu", "ayu@mail.com", "123")

// console.log(user.encryptPassword());
// console.log(user.changeUsername());