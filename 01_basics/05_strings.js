const name = "Shailesh"
const repoCount   = 1

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shailesh-sm-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringOne = "     Shailesh      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shailesh.com/shailesh%20maurya"
console.log(url.replace('%20', '-'))
console.log(url.includes('happy'))

console.log(gameName.split('-'));