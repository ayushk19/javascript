// switch default

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 10

switch (month) {
    case 1:     //you can also use string value and comparison operator like in if else
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;

    default:
        console.log("Default Values Match")
        break;
}

/* if we remove any break statement from any case then it will print all the case statement after the matching case except "default statement" */