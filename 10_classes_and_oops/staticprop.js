class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){
        return '123'
    }
}

const ayu = new User("ayush")
ayu.logMe()
// console.log(ayu.createId());     // because of static keyword we can't       access that function

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@phone.com")
iphone.logMe()
// console.log(iphone.createId()); //can't access by child class also
