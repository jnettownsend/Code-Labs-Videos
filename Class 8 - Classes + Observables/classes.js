// Javascript Classes

class User{
    username = ''
    constructor(newUsername){
        this.username = newUsername;
        console.log("Instance was created!")
    }
    
    printMyName(){
        console.log(`My name is ${this.username}`)
    }
}


let user = new User("John123");
console.log(user);
user.printMyName();

let userTwo = new User("Amy123");
console.log(userTwo);
userTwo.printMyName();

