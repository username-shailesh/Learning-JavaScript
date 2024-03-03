// var c = 80

let a = 90

if(true){
    let a = 30  
    const b = 40 
    // var c = 50
    // console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function One(){
    username = "Shailesh"

    function Two(){
        platform = "Youtube"
        // console.log(username);
    }
    // console.log(platform);

    Two()
}

// One()

if(true){
    const username = "Shailesh"
    if(username === "Shailesh"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addone(5));
function addone(num1){
    return  num1+1
}


console.log(addTwo(7));
const addTwo = function(num2){
    return num2+2
}
