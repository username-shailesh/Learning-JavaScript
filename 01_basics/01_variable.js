const accountId = 546256
let accountEmail = "shailesh@google.com"
var accountPassword = "256455"
accountCity = "Lucknow"
let accountState;

// accountId = 2  // not allowed

accountEmail = "sm.shailesh@yahoo.com"
accountPassword = "548566"
accountCity = "Uttar Pradesh"

console.log(accountId);

/*
Prefer not to use var
because of issue on block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])