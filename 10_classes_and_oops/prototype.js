// we want were the space is in word we use new method called truelength
// let myName = "Ayush    "
// console.log(myName.length);  print length with space
//Everything in JS is object 
/** 
* Array -----------Object ----- null
* Function -------------Object -------- null
* String -----------Object -------- null
*/


let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ayush = function(){
    console.log('Ayush is present in all objects');
}

Array.prototype.heyAyush = function(){
    console.log("Ayush says hello!");
}

// heroPower.ayush()
// myHeros.ayush()
// myHeros.heyAyush()
// heroPower.heyAyush()     // shows error array takes object property not vise versa

//inheritance

const User = {
    name: "ayu",
    email: 'ayu@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// solving our above problem
let anothername = "AyushK"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anothername.trueLength()
"Ayush".trueLength()
"icecream".trueLength()