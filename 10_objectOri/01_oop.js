// Object Literal
const user={
    username:"Mansi",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
     console.log("get user details from database")  
     console.log(`Username: ${this.username}`);
     console.log(this) // current context
    } 
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


// construction function
 
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// const userOne = User("hitesh", 12, true)
// const userTwo =  User("ChaiAurCode", 11, false) // override the data in userOne of userTwo


// using new - new instance created
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); // reference of self
//console.log(userTwo);
