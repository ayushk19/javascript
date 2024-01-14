// truthy values: when we assume any variable having true value like in this case

const UserEmail = "ayu@mail.com"

if (UserEmail){
    console.log("Got User Email")
}else{
    console.log("User Email not found")
}

//false value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// "0", "false", " <space>", [], {}, function(){}

//checking empty array
// const arr = []
// if (arr.length === 0){
//     console.log("Array is empty");
// }

//checking empty object
const MyObj = {}
if(Object.keys(MyObj).length === 0){
    console.log("Object is empty")
}

//Nullish Coalesing Operator (??) : for null and undefined

let val1;
// val1 = 5 ?? 10  //output: 5
// val1 = null ?? 10  //output: 10
// val1 = undefined ?? 15  //output: 15
val1 = null ?? 10 ?? 20      //which value occur first after null it'll assign that value -- Output: 10

console.log(val1)

// Terniary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")