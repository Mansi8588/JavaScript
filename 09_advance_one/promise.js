
// The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.

// .then and .catch consect made by promises
// if response come - .then
// if error come - .catch


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
        // pass data come from network
resolve({username:"mansi",email:"mansirai0416@gmail.com"})
    },1000)
})

Promisethree.then(function(user){
console.log(user) // whatever write in resolve return here 
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"mansi",email:"mansirai0416@gmail.com"})
        }
        else{
            reject('Error')
        }
    },1000)


})

// const username=promiseFour.then((user)=>{   // cannot get username like this
//     console.log(user);
//     return user.username
// })
// console.log(username) // error


const username=promiseFour
.then((user)=>{   
         console.log(user);
         return user.username
     })
     .then((un)=>{ // chaining - return of upper function in lower
 console.log(un)
     })
     .catch((er)=>{
console.log(er)
     })
     .finally(()=> console.log("finally promise is resolve or reject"))



    const promiseFive=new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=false
        if(!error){
            resolve({username:"nich",password:"123"})
        }  else{
            reject('Error: js went worng')
        } 
         },1000)
    }) 


    // as async function do not respone catch (no handle error)
    // async function consumepromiseFive(){
    //    const response= await promiseFive
    //     console.log(response)
    // }


    // to handle error use try catch block
    async function consumepromiseFive(){
   try{
    const response= await promiseFive
    console.log(response)
   }
   catch(error){
    console.log(error);
   }

     }
    consumepromiseFive()


    async function getAllUsers(){
        try{
            const respone=await fetch('https://jsonplaceholder.typicode.com/users')
            const data=await respone.json() // converting string to json also take time so we use await
            console.log(data);

        }
    catch{
        console.log("error")
       }
    }

    getAllUsers()



    // fetch return promise
    fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
// no need to call
 