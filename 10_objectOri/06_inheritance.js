class User{
    constructor(userame){
        this.userame=userame;
    }

    logMe(){
        console.log(`UserName is ${this.userame}`);
    }
}



class Teacher extends User{
    constructor(userame,email,password){
        super(userame)
        this.email=email;
        this.password=password;
    }

    addCourse(){
       console.log(`A new course was added by ${this.username}`)
    }
}

const Tech1= new Teacher("student", "svduw@gmail.com","123")
Tech1.addCourse()

const NewStudent=new User("mansirai")

console.log(Tech1===NewStudent);
console.log(Tech1===Teacher);


// to check ki wah usi se bani hai we use instanceof
console.log(Tech1 instanceof User);





