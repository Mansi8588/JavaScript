 class User {
    constructor(email,password){
        this.email= email;
        this.pasword= password;
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value)
    {
         this._email =value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
         this._password = value
    }

}




const mansi=new User("and@gmail.com","123");

console.log(mansi.password);
console.log(mansi.email);





