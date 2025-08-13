//There are two ways to declare an object
// -literals
// -Constructor ---> //Object.create
//                   //singleton

//object literals
const mySym = Symbol("key1")


const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",  //double quote items can only be accessed using brackets[]
    // mySym: "newKey1", //it wont access the symbol
    [mySym]: "newkey1",  //now accessing the symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

//Accessing the objects
// console.log(jsUser.email);        //using dot operator to accessing object items
// console.log(jsUser["email"]);     //using brackets to access object
// console.log(jsUser["full name"]); //cannot use dot operator to access this item

//Accessing symbols in Objects
// console.log(jsUser.mySym);         //it wont access the symbol inside the object
// console.log(typeof jsUser.mySym);  //returns string type
// console.log(jsUser[mySym]);        //now accessing the symbol from the object



//changing values of an object
jsUser.email = "samir@chatgpt.com" //accessing and changing the value of an object
// console.log(jsUser);

// //locking values of the object
// // Object.freeze(jsUser)       //now values of the object can be changed
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);           //now there is no change in the values


//Adding functions in Objects
jsUser.greeting = function(){     //functions can be used similar to variable
    console.log("hello js user");   
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //using string interpolation
}
console.log(jsUser.greeting());   //returns functions content
console.log(jsUser.greetingTwo());