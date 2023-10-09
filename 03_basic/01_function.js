function sayName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayName()

// function addtwonumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addtwonumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2
}

const result = addtwonumbers(3, 7)
// console.log("Result: ", result);

function loginUserMessage(username = "Ayu"){    //define default value
    if (!username){     //or we also use username === undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Ayush'));
console.log(loginUserMessage());

function calculateCartPrice(val1, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    goodsname: "Pizza",
    price: 999
}

function handleObject(anyobject){
    console.log(`User ${anyobject.goodsname} price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    goodsname: "burger",
    price: 88
})

const newArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200, 400, 100, 6000]));