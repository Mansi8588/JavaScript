
// The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.




const promiseOne=new Promise(function(resolve ,reject){
    // Do an async task
    // DB calls ,cryptography, network
    setTimeout(function(){
        console.log("async task is complete");
        resolve() // for consume we need to connnect resolve and .then
    },1000)
})
// all value return here in consume part
promiseOne.then(function(){
    console.log("Promise consumed");
})




new Promise(function(resolve ,reject){
  
    setTimeout(function(){
        console.log("async 2 task is complete");
        resolve() 
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const Promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"mansi",email:"mansirai0416@gmail.com"})
    },1000)
})

Promisethree.then(function(user){
console.log(user) // whatever write in resole return here 
})

