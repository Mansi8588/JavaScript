// type of datatype based on memeory store and way of access


// 01  Premitive (call by value)  copy value is given and changes in copy only

// 7 types : String,Number, Boolean, null,undefined, Symbol, BigInt

// javascript  is dynamically typed language 


// 02 Reference (Non Premitive)

// Array, Objects, Functions


const heros=["saktiman","flyman","krish"];

let myObj={
    name:"mansi",
    age:98,
}
const myFunction=function(){
    console.log("dns");
}

// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);



/*************************************/

//Stack (Primitive)  , Heap(Non Premitive)

let name="mansi"
let anothername=name
anothername="akndsq"
console.log(name)
console.log(anothername)

let userOne={
    email:"nsibdd",
    upi:"msodq",
}

let userTwo=userOne

userTwo.email="nasidue"

console.log(userOne.email);
console.log(userTwo.email);

