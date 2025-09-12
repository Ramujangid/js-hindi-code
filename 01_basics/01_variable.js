const accountId = 123455
let accountEmail = "rkjangid@gmail.com"
var accountPassword = "22222"
accountCity = "jaipur"
let accountState;

// accountId = 2  // not allowed

accountEmail = "hahr@google.com"
accountPassword = "111113"
accountCity = "Barmer"


/*
prefer not use var
because of issuse in block scope and functional scope

*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountState])
