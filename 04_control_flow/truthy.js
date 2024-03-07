const userEmail = []

if(userEmail){
    console.log("Get user Email");
}else{
    console.log("Don't get user Email");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values
// "0", 'false', " ", [], {}, function(){}


// if(userEmail.length ===0){
//     console.log("Array is empty");
// }

const emptObj = {}

if(Object.keys(emptObj).length === 0){
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??):  null, undefined

// let val1 = 5 ?? 10
// let val1 = null ?? 10
// let val1 = undefined ?? 5
let val1 = null ?? 10 ?? 9





console.log(val1);


// Terniary Operator

// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");