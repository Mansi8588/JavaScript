// Dates

let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate) 

let myCreateDate=new Date(2023,0,24,6,2)
console.log(myCreateDate.toDateString())
console.log(myCreateDate.toLocaleString())

let time=Date.now()
console.log(time)

let mytime=new Date()

console.log(mytime)
console.log(mytime.getMonth()+1)
console.log(mytime.getDay())



