const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNums = myNumbers.map( (num) => num + 10 )   //add 10 to numbers and print them

// const myNums = myNumbers.map( (num) => {num + 10} ) //return undefined beacuse we define scope {} but we can't written return keyword

// const myNums = myNumbers.map( (num) => {return num + 10} )  //return correct values after operation

const myNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => {return num >= 40})

console.log(myNums);