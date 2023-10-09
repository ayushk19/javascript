//var c = 300   //this will change if we declare same inside other block and assign new value to it
let a = 200
if (true){
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}

console.log(a);
// console.log(b);     //shows error because b is defined inside if block