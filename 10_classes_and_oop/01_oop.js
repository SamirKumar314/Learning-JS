//object literals---------
const user = {
    username: "samir",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function(){
        console.log("got users details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);   //current context
        
    }
}
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);    //current context of global = {}


//new keyword-----------------
//creates new instances of a function
function User(username, loginCount, isLoggedIn){
    this.username = username          //this.username is the variable and username is the value passed to the function
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    //creating method inside the function also helps creates data abstraction
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this   //the values are returned implicitly
}

const userOne = new User("samir", 12, true)
const userTwo = new User("chaiAurCode", 10, false)
//if we do not use 'new' keyword, it wont create a new instance,
//rather it overwrites the old values with the new values
console.log(userOne);
console.log(userTwo)
console.log(userOne.constructor);   //shows reference to the function


//*notes:-
// - new keyword creates an empty object called instance.
// - after creating instance, it calls a constructor functions(include all arguments)
// - all the arguments gets injected to 'this' keyword.
// - returns the object of the instance.