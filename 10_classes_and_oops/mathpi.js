const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);    // description of the property of PI

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const ayu = {
    name: "ayush",
    price: 250,
    isAvailable: true,

    fullname: function(){
        console.log("Ayush K");
    }
}

console.log(Object.getOwnPropertyDescriptor(ayu, "name"))

Object.defineProperty(ayu, 'name', {
    // writable: false,
    enumerable: false   // changing property of object... here we can't iterate with the name key because we made it false
})

console.log(Object.getOwnPropertyDescriptor(ayu, 'name'));

for (const [key, value] of Object.entries(ayu)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}