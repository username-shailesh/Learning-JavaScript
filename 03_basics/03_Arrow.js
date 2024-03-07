const user = {
    username: "Shailesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = "Sha"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Shailesh"
//     console.log(this.username);
// }

// chai()


// const chai = function(){
//     let username = "Shailesh"
//     console.log(this.username);
// }


// const chai = ()  => {
//     let username = "Shailesh"
//     console.log(this.username);
// }


const chai = ()  => {
    let username = "Shailesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)


const addTwo = (num1, num2) =>  ({username: "Shailesh"})

console.log(addTwo(4, 5));
