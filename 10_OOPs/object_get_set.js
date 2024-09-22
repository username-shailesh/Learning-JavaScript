const User = {
    _email: 'shai@google.com',
    _password: "ssk",

    get email(){
        return this._email.toUpperCase()
    },  
    set email(value){
        this_email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
