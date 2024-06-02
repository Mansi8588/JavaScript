const User = {
    _email: 'h@hc.com',
    _password: "abc",  // _ show private property no access by anyone


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}


// factory function
const tea = Object.create(User)  // create an object on basis of user 
console.log(tea.email);   // tes get access of user


// get -- memory se leke aana
// set -- 