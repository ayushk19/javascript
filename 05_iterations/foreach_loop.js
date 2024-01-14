const coding = ["js", "ruby", "py", "java", "cpp"]

// coding.forEach(function (item){
//     console.log(item)
// })

//arrow function
// coding.forEach((item) => {
//     console.log(item)
// })
/* we can write in this way also */
// coding.forEach((item) => console.log(item))

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)   //print value with index and the whole array 
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})