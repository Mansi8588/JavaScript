function setUser(username){
    this.username=username
    console.log("called")
}

function createUser(username,email,password){

    // setUser(username)  -- as when we console.log(chai) it do not represent username 
    // because once setUser call it get out of stack so all variable also gayab

    setUser.call(this, username)   // hold the reference
// main gayab hu to hu mere saman aapka after using this here

// call passes current ececution context to another function



    this.email=email
    this.password=password
}

const chai=new createUser("chai","nich@gmail.com","568")
console.log(chai);