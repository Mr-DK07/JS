// Let, Var, Const
console.log("Hello world");

const accountId = 11
let accountEmail = "dk@gmail.com"
var accountPassword = "123" /* Prefer not to use var because of issue in block scope and functional scope */
accountCity = "Delhi"  // it can be written without let keyword, but this is not prefered.
let accountState; // undefined

//accountId = 2

accountEmail = "a@gmail.com"
accountPassword = "234"
accountCity = "Jaipur"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
