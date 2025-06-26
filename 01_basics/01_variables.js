const accountId = 144553
let accountEmail = "samir@google.com"
var accountPassword = "12345" //refer to line 14-15
accountCity = "Chittaranjan" // should not be used in this manner
let accountState; //null values are defined as undefined

// accountId = 2 //-is not allowed

accountEmail = "sk@sk.com"
accountPassword = "121212"
accountCity = "Asansol"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) 
//displays all the contained variables values in a table