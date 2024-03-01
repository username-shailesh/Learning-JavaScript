// singleton
// Object.create



// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shailesh",
    "full name": "Shailesh Maurya",
    [mySym]: "mykey1",
    age: 18,
    location: "Lucknow",
    email: "shailesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "shailesh@hotmail.com"
// Object.freeze(JsUser)
JsUser.email = "shailesh@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());