class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const newT = new Teacher('T1', 'teacher@mail.com', "123")
newT.addCourse()
newT.logMe()

const userOne = new User("Ayush")
userOne.logMe()

// console.log(newT instanceof Teacher);    //true
console.log(newT instanceof User);          //true