//This keyword and arrow fucntions
//This keyword in objects---------
const user = {
    username: "samir",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        // console.log(this); //this keyword shows current context of the object                
    }
}
// user.welcomeMessage()
// user.username = "sam"  //changing the context of the object
// user.welcomeMessage()  //shows the changed context
// console.log(this);  //current context(global) shows empty, check in browser's inspect page


//this in functions-----------
//1
// function chai(){
//     // console.log(this);  //shows all the values of a function
//     let username = "samir"
//     console.log(this.username);  //returns undefined, context only works in objects not in function
// }

//2
// const chai = function () {
//     let username = "samir"
//     console.log(this.username);  //returns same value as above undefined    
// }





//Arrow functions (=>)-----------
const chai = () => {
    let username = "samir"
    console.log(this.username);  //returns same value as above undefined
    console.log(this);           //this returns empty parenthesis in arrow function
}
// chai()

//basic arrow function "() => {}"---------
//giving a name to arrow function
// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));


//Implicit Return Arrow Function "() => ()"--------------
// 1
// const addTwo = (num1, num2) => num1 + num2

// 2
// const addTwo = (num1, num2) => (num1 + num2)   //return keyword is not required here

// 3_Return a object from implicit function
const addTwo = (num1, num2) => ({username: "samirk"})
console.log(addTwo(3, 4));




//Functions inside loop-----------
const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(function(){})

// or
// myArray.forEach(() => {})  //arrow function

// or
// myArray.forEach(() => ())  //Implicit return function

//more about this later...