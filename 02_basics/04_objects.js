// const msUser = new Object()      // ---> singleton
const msUser = {}                  // ----> non-singleton

msUser.id = "254xyz"
msUser.name = "Lenovo"
msUser.isLoggedIn = false

// console.log(msUser);


const regularUser = {
    username:{
        userfullname:{
            firstname:"Shailesh",
            lastname:"Maurya"
        }
    } 
    
}

// console.log(regularUser.username.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "x", 6: "y"}

// const obj4 = { obj1, obj2, obj3 } 
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj3}

// console.log(obj4);

const users = [
    {
        id: 5,
        email: "sm@google.com"
    },
]


users[0].email
console.log(msUser);

console.log(Object.keys(msUser));
console.log(Object.values(msUser));
console.log(Object.entries(msUser));

console.log(msUser.hasOwnProperty('isLoggedIn'));