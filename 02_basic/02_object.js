// singleton
// Object.create


// object  literals

const mysy=Symbol("keys1")
 

const users ={
    name:"mansi",
    email:"bdofa@dkoz",
    age:42,
    [mysy]:"mykey2",   // symbol is define like this
    location:"ram gulm tola",
    islog:"no"
}

console.log(users.email)
console.log(users["email"])
console.log(users[mysy])  // symbol is access like this



users.name="ambju"
console.log(users)

Object.freeze(users)  // further change not implemented


users.name="nich"
console.log(users)


/*
users.greeting = function(){
    console.log("Hello JS user");
}
users.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(users.greeting());
console.log(users.greetingTwo());


*/





// part 2 object //


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // return array of keys used in loop
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  //  make array inside array with key and value pair

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// destructureing 
 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor


// const {courseInstructor} = course shortcut of above code (course.courseInstructor)
// console.log(courseInstructor);


const {courseInstructor: instructor} = course
console.log(instructor);




/* Json data -- javascript object notation


 {
     "name": "hitesh",
     "coursename": "js in hindi",
     "price": "free"
 }

*/


[
    {},
    {},
    {}
]