const descripture= Object.getOwnPropertyDescriptor(Math, "PI") // hidden property of object
// console.log(descripture);

// console.log(Math.PI);
Math.PI=5;   // cannot override
// console.log(Math.PI);

const mynewObj=Object.create(null)

const newObj ={
    name:"Raisahab",
    price:10000,
    isAvailable:true,
    orderBook: function(){
        console.log("book not available")
    }
}

// console.log(Object.getOwnPropertyDescriptor(newObj,"name"));

Object.defineProperty(newObj,"name",{
    writable:false,
    enumerable:false   // if it false we cannot get value of name  
})

// console.log(Object.getOwnPropertyDescriptor(newObj,"name"));

for(let [key,value] of Object.entries(newObj)){
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`)
}
