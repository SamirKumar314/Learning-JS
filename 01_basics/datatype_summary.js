// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; //number
const scoreValue = 100.3  //still number(float)

const isLoggedIn = false //boolean
const outsideTemp = null  //null datatype
let userEmail; //undefined or 'let userEmail = undefined;'

const id = Symbol('123')
const anotherId = Symbol('123')  //even though id and anotherId have same value(123) they are still unique

// console.log(id === anotherId);

const bigNumber = 89713984183419424n  //adding at the last convert the datatype from number to bigInt




// REFERENCE TYPE (Non-primitive)
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga", "dhruva"];  //Array

//object-
// {
//     name: "samir",
//     age: 21,
// }
let myObj = {
    name: "samir",
    age: 21,
}//Object stored in a variable myObj

//function-
// function(){
//     console.log("hello world");    
// }
const myFunction = function(){
    console.log("hello world");    
}

// console.log(typeof scoreValue);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof heroes);
// console.log(typeof myObj);
// console.log(typeof myFunction);

// console.log(typeof anotherId);





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack memory (Primitive) ,  Heap (Non-primitive)

//stack(Primitive datatype, when accessed returns a copy of the original value)
let myYoutubename = "hiteshchaudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

//heap(Non-primitive, when value is accessed it returns a reference to the original value, not a copy)
let userOne = {
    email: "user@google.com",
    upi: "user@ybi"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com" // it references to the original value hence making any change, changes the original values too

console.log(userOne.email);
console.log(userTwo.email);