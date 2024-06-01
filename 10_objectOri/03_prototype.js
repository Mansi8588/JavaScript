let name= "mansirai"
// console.log(name.trim().length);


let ar=["krish","shnkar ji"]

let heropower={
  thor:"hammer",
  spiderman:"sling",
  getSpiderPower:function(){
    console.log(`spiderman power is ${this.spiderman}`);
  }
}

// create a prototype mansi

Object.prototype.mansi=function(){
    console.log('mansi is present in all objects');
}

heropower.mansi()
ar.mansi()



// inheritance



const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // teacher inherite the property of user

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher) // TeachingSupport access all property of Teacher

let anotheruser="  nichansc   ast   "

String.prototype.trueLength=function(){
    console.log(`${this}`);  // give reference to that which call this function

    console.log(`True length is : ${this.trim().length}`)
}

anotheruser.trueLength()