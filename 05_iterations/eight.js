const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function(acc, currval) {
//     console.log(`accumulator: ${acc} and current value: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce( (acc, currval) => acc + currval, 0 )

// console.log(myTotal);


const ShoppingCart = [
    { 
        itemName: "js course",
        price: 2999
    },
    { 
        itemName: "python course",
        price: 999
    },
    { 
        itemName: "mobile dev course",
        price: 7999
    },
    { 
        itemName: "data science course",
        price: 12999
    },
]

const PriceToPay = ShoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(PriceToPay);


