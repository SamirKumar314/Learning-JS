// Converting other datatypes into number
let score = "33abc"                    // I/P(null, undefined, true, false, "33", samir)= O/P(0, NaN, 1, 0, 33, NaN)
//console.log(typeof score);

let valueInNumber = Number(score)      //Number() converts other datatypes into number

//console.log(typeof valueInNumber);
//console.log(valueInNumber);


//Converting other datatypes into boolean
let isLoggedIn = "samir"              // I/P(1, 0, "", "samir")= O/P(true, false, false, true)
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);
//console.log(typeof booleanIsLoggedIn);


//Converting other datatypes into string
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

