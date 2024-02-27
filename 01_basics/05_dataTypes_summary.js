// Primitive DataType

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

const bigNumber = 5485622555222n

// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "Vikral", "Junior G"]

let myObj = {
    name: "shailesh",
    age: 18
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);