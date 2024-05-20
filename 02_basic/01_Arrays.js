// Shallow Copy 
//   A shallow copy of an object is a copy whose properties share the same references
//    (point to the same underlying values) as those of the source object from which the copy was made.
//     As a result, when you change either the source or the copy, you may also cause the other object to change too.
//   That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.


// // Deep copy
// A deep copy of an object is a copy whose properties do 
// not share the same references (point to the same underlying 
// values) as those of the source object from which the copy 
// was made. As a result, when you change either the source or the copy,
// you can be assured you're not causing the other object to change too

// ARRAY

const myArr=[0,1,3,1,6,9,4]
const myHero=["saktiman", "Krish"]
const myArr2=new Array(1,3,6,2)
console.log(myArr[1])

// Array methods

myArr.push(42)
myArr.pop()

myArr.unshift(4) // add number in begining so time consuming because we have to shift whole array elemnet
myArr.shift()

const newArr=myArr.join() // convert into string
console.log(myArr)
console.log(newArr)


// slice , splice

const myn1=myArr.slice(1,4) // not remove only made a new array with the middle element exclude last index
console.log(myArr)
console.log("A",myn1)

console.log(myArr)



const myn2=myArr.splice(1,4) // remove midle emelemt from array
console.log(myArr)
console.log("B",myn2)


const arr1=["snd","bfief", "nbsdj", "dfiu"]
const arr2=["skdiu", "dbife", "dcdeiuc"]

arr1.push(arr2);   // same array update
console.log(arr1);

const arr1cat=arr1.concat(arr2);  // array generate
console.log(arr1cat)


// spread

const all_new=[...arr1,...arr2] // 

console.log(all_new)

const another=[21,23,13,64,[3,45,24,[4,23,65,6],2,7],42,89]
const real_another=another.flat(Infinity)
console.log(real_another)



// some adv

console.log(Array.isArray("mansi"))
console.log(Array.from("mansi"))
console.log(Array.from({nams:"mansi"}))  // interesting as if it not able to made array it give empty array

let s1=187
let s2=853
let s3=753
console.log(Array.of(s1,s2,s3))