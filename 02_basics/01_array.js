// +++++++++++++++++++++++ array ++++++++++++++++++++++++++++

const myArr = [1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(2, 3, 4, 5)
// console.log(myArr[1]);

// Array Methods

// myArr.push(4)
// myArr.push(9)
// myArr.pop()

// myArr.unshift(7)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// ***************************** slice, splice ***************************

console.log("A", myArr);

const myn1 = myArr.slice(2,4)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(2,4)

console.log(myn2);
console.log("C", myArr);