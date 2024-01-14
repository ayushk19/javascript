// For of

// ["", "", ""]    //string inside array
// [{}, {}, {}]    //object inside array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greeting = "Hello World!" 
for (const greet of greeting) {
    // console.log(`Each char is: ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('AUS', 'Australia')
map.set('FR', 'France')

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, " :- ", value)
// }

const MyObj = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for (const [key, value] of MyObj) {     //showing error Object is not iterable using Forof loop
//     console.log(key, " :- ", value)
// }
