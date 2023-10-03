//  singleton
//  object.create

//  object literals

const mySym = Symbol('Key1')

const JsUser = {
    name: "Ayush",
    "full name": "Ayush Kesarwani",
    [mySym] : "myKey1", //symbol type
    age: 22,
    location: "Chandigarh",
    email: "ayu@mail.com",
    isLoggedIn: false,
    lastLogginDay: ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ayush@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "ayush@micro.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());