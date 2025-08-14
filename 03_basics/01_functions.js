//function defintion in js
/*    Function is simply a package that contains the code,
which can be used multiple times     */
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("R");
    console.log("K");    
}
//functions reference
//sayMyName

//functions execution
// sayMyName()


//adding argument to a function
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(1,2)

//return a value from the function
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

        //or simply
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ",result);


//adding if statement to the function
function loginUserMessage(username){
    if(!username){  //if(username === undefined){   //both the option are the same
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh")); //sending string to the fucntion
// console.log(loginUserMessage());         //no arguments returns the if condition
// console.log(loginUserMessage(""));       //sending empty string returns the if condition








// ++++++++++++++++++++++++++++++++ PART-2(functions) ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//rest operator in functions(looks similar to spread operator)
function calculateCartPrice(val1, val2, ...num1){  //spread operator simply puts all the values inside an array
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

//Passing Objects to function
const user = {        //creating an object
    username: "samir",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
}
handleObject(user)   //passing the already created object into the fucntion
handleObject({       //we can also directly pass object as a paramter when executing function
    username: "altsamir",
    price: 2000
})


//Passing Arrays to function
const myNewArray = [200, 400, 100, 600]  //creating a new array
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
//or we can directly pass the array as a parameter
console.log(returnSecondValue([99, 9999, 999999]));

