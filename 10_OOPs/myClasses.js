class User {
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}

const user2 = new User("shailesh", "shailesh@google.com", "2345")
console.log(user2.encryptPassword());
console.log(user2.changeUsername());


// behind the scene


function User(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}abc`
}


const tea = new User("tea", "tea@google.com", "245")


console.log(tea.encryptPassword());
console.log(tea.changeUsername());