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
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************Operations*************************
let value = 3;
let negValue = -value;

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " samir"

let str3 = str1 + str2;
// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

let num1, num2, num3;
num1 = num2 = num3 = 2+2 //not ideal

let gameCounter = 100;
console.log(gameCounter++); //suffix increment

console.log(gameCounter); //increases after the operation

console.log(++gameCounter); //preffix increments first

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion