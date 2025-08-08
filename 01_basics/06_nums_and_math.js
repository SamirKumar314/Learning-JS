const score = 400
// console.log(score); //400

// explicitly define the datatype as number
const balance = new Number(100)
// console.log(balance); //[Number: 100]

// Number object has many functions
//some are: constructor, toString, toPrecision, valueOf, toFixed
//toExponential, toLocaleString, etc.
// console.log(balance.toString().length);         //Converts to string and returns a length of the string; 3
// console.log(balance.toFixed(2));                //shows decimal places upto nth term; 100.00

const otherNumber = 123.8905
// console.log(otherNumber.toPrecision(4));        //shows terms upto nth place

const hundreds = 1000000
// console.log(hundreds.toLocaleString());         //by default adds comma by US standard; 1,000,000
// console.log(hundreds.toLocaleString('en-IN'));  //switch to indian standard, 10,00,000



// +++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);                             //Math is a object and contains many properties/functions
// console.log(Math.abs(-4));                     //returns absolute value of any number
// console.log(Math.round(4.75));                 //rounds the number
// console.log(Math.ceil(4.2));                   // rounds the number to higher value
// console.log(Math.floor(4.75));                 //rounds the number to lower value
// console.log(Math.min(4.75, 1, 2 ,7));          //finds min number
// console.log(Math.max(4.75, 1, 2 ,7));          //finds max number

console.log(Math.random());                       //returns a number from 0 to 1 by default
console.log((Math.random()*10)+1);                //returns a non-zero number
console.log(Math.floor(Math.random()*10)+1);      //returns a non-zero number and also rounds the number also

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//returns a number within the specified limit(min < N < max)