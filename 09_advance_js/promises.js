const promiseOne = new Promise(function (resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// code without using variables
new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username: "ayu", email: "ayu@mail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "ayu", password: "1234"})
        }else{
            reject("Error! something went wrong")
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("Promise is either resolve or rejected"))

const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username: "JS", password: "1234"})
        }else{
            reject("Error! JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const resolve = await promiseFive
        console.log(resolve);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()    //is we directly write response.json it takes time so we have to write await keywords
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()