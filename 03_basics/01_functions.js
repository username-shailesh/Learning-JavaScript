
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