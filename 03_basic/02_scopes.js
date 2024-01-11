//var c = 300   //this will change if we declare same inside other block and assign new value to it
let a = 200
if (true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);     //shows error because b is defined inside if block

function one(){
    const username = "Ayush"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website)    //shows error because 'website' is local variable 

    // two()    //if we can't run funtion two then username will not print
}

one()

if(true){
    const username = "Ayush"
    if(username === 'Ayush'){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website)    //not accessible
}
//console.log(username)     //username is defined inside if statement so we can't access outside if

// +++++++++++++++++++ interesting ++++++++++++++++++++++

//different syntax for making function

console.log(add1(5))    // you can access you funtion like this if we initialize function like below
function add1(num){
    return num + 1
}


console.log(add2(5))    // its shows error because on initializing function like below we can't call first......
const add2 = function(num){
    return num + 2
}
