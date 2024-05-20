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


