const User = {
    _email: 'ayu@mail.com',
    _password: "ABC",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const mail = Object.create(User)
console.log(mail.email);