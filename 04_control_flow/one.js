//if statement-----
/*
    if condition should be true, in order to run the
    code inside the scope '{ }'
*/
const isUserLoggedIn = true
const temperature = 41

// if (temperature < 50) {
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }
// console.log("execute")

//all the operator
// <, >, <=, >=, ==, !=, ===(strict equal), !==


//scope in if--------
// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); //throws error cause power is not defined


//Implicit scope-------
//there is no need to write the scope "{}"
//- mostly, used in singlelined code
// const balance = 1000
// if(balance > 500) console.log("test");



// //condition nesting
// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }



//multiple condition check-----
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("user logged in");   
}