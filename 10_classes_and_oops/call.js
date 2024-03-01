function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username, email, password){
    // SetUsername(username)
    // .call is used for holding reference
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const newUser = new createUser('ayu', 'ayu@mail.com', '123')
console.log(newUser);