// Immediately Invoked Function Expressions (IIFE)

//normal funtion
// function code(){
//     console.log('DB CONNECTED');
// }
// code()

// IIFE - we get problem from global scope variable so we use IIFE to repulse(hatana) that

//named IIFE
(function code(){
    console.log('DB CONNECTED');
})();    //it will execute function same as above calling

//syntax IIFE
//()();
//function,calling

/* important => if we want two IIFE then use semicolon at last otherwise it will give error */


//unnamed IIFE
( () => {
    console.log('DB CONNECTED TWO');
})();
//with aurgument
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Ayu')