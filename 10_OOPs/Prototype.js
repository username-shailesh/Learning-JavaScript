// let myName = "Shailesh     "
// let myChannel = "Shailesh Maurya  "

// console.log(myName.truelength);


let myHeros = ["thor", "Ironman"]
    
let heroPower = {
    thor: "hammer",
    Ironman: "Suit",

    getthorPower: function(){
        // console.log(`Thor power is ${this.thor}`);
    }
}

Object.prototype.shailesh = function(){
    // console.log(`shailesh is present in all objects`);
    
}

Array.prototype.heyShailesh = function(){
    // console.log(`Shailesh say hello`);
}

// heroPower.shailesh()
myHeros.shailesh()
myHeros.heyShailesh()
// heroPower.heyShailesh() 

// Inheritance

const User = {
    name: "Maurya",
    email: "maurya@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: `JS assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Shailesh      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"shailesh".trueLength()
"ice".trueLength()