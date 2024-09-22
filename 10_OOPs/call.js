function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const user1 = new createUser("Shailesh", "shailesh@gmail.com", "234")
console.log(user1);
