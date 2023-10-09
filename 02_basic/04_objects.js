//  singleton

// const travelApp = new Object()  // singleton
const travelApp = {}    //non - singleton

travelApp.id = "123asd"
travelApp.name = "Ayush"
travelApp.isLoggedIn = false

// console.log(travelApp);

const regularUser = {
    email: "mail@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayush",
            lastname: "Kesarwani"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}   //return result in array inside array form
// const obj3 = Object.assign(obj1, obj2, obj4)
// console.log(obj3 === obj1);// in this case it will return true

// const obj3 = Object.assign({}, obj1, obj2, obj4)    //the empty {} is to store all value in new object .... otherwise it add to first object
// console.log(obj3 === obj1); // in this case it will return false

const obj3 = {...obj1, ...obj2}     // we use this method more
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "ayu@mail.com"
    },
    {
        id: 1,
        email: "ayu@mail.com"
    },
    {
        id: 1,
        email: "ayu@mail.com"
    },
]

users[1].email
// console.log(travelApp);

// console.log(Object.keys(travelApp));
// console.log(Object.values(travelApp));
// console.log(Object.entries(travelApp));

// console.log(travelApp.hasOwnProperty('isLoggedIn'));

//json format

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Ayush"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

//json format
// {
//     "name": "ayush",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// ramdomusers api website helps to find random api's
// use json formator for fomat and beautify data so it became easy for undersand