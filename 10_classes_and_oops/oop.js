const user = {
    username: "ayu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);  //use this keyword for represent current context variables
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);   //shows empty because we don't have any value outside

function User(username, loginCount, signedIn){
    this.username = username     //on same username we user this keyword
    this.loginCount = loginCount
    this.signedIn = signedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this //either you write or not it will implicitly return this keyword
}

// const userOne = User('ayu', 12, true)
// const userTwo = User('Ayush', 13, false)    
/*on using like this, the second value or we say the last value overwride the above one...to neglect this error we use new keyword */
const userOne = new User('ayu', 12, true)
const userTwo = new User('Ayush', 13, false)
console.log(userOne.constructor);
// console.log(userTwo);

// New Keyword
/**
 * when we use new keyword it firstly created an empty object
 * calls constructor function (pack arguments)
 * arguments injected in this keyword
 * you get all details
 */