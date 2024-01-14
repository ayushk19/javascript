// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5){
        // console.log("5 is number")
    }
    // console.log(element)
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Value: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop value: ${j} and Outer Loop: ${i}`)
        // console.log(i + " * " + j +" = " + i * j)
    }
    
}

let MyArray = ["flash", "batman", "superman"]
//console.log(MyArray.length)
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    // console.log(element)
    
}

// break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 8){
//         console.log('Detected 8')
//         break
//     }
//     console.log(`Value of i is: ${index}`);
    
// }


for (let index = 0; index <= 20; index++) {
    if (index == 8){
        console.log('Detected 8')
        continue
    }
    console.log(`Value of i is: ${index}`);
    
}