class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}shailesh`
    }

    set password(value){
        this._password = value
    }
}

const shailesh = new User("s@shailesh.ai","xyz")
console.log(shailesh.email);
