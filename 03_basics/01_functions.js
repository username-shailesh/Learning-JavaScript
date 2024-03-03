
function myValue() {
    
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("L");
    console.log("I");
    console.log("S");
    console.log("E");
    console.log("H");
}
// myValue()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2

}


const result = addTwoNumbers(5,4)
// console.log("Result: ",result);


function loginUserMessage(username = "Sha"){
    if (!username){      // if (username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shailesh"))
console.log(loginUserMessage("Shailesh"))


//   ****************************************************************************

function addCartPrice(value1, value2, ...num1){
    return num1
        
}

// console.log(addCartPrice(100, 200, 500, 2000))

const user = {
    username: "Shailesh",
    price: 399
}

function handleObject(anyObject){
    console.log((`Username is ${anyObject.username} and price is ${anyObject.price}`));
}

// handleObject(user)

handleObject({
    username: "Sha",
    price: 499
})
    

const myNewArray = [200, 300, 400, 500]

function mySecondValue(getArray){
    return getArray[1]

}

// console.log(mySecondValue(myNewArray));
console.log(mySecondValue([200, 300, 400, 500]));