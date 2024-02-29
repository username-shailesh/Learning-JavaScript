// Dates

let myDate = new Date
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let newCreatedDate = new Date(2024, 0, 28)
// let newCreatedDate = new Date(2024, 0, 28, 5, 30)
// let newCreatedDate = new Date("2024-01-23")
let newCreatedDate = new Date("01-15-2024")
// console.log(newCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(newCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
})
