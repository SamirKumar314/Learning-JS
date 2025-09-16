//more on prototypes---------------------
//prototypal behaviour---------(default behaviour)

//prototype---
//- new keyword
//- classes
//- this keyword
//- prototypal inheritance

//Array -------> Object ------> null
//String-----------^



//function behaviour-------------------
function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5))
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);   //returns an empty object(i.e. {})

//function can also behave like an object
//function-----> Object-------> null
//(function technically references to object)


//this keyword-----------------
//refers to current context
function createUser(username, price){
    this.username = username
    this.price = price
}

//creating prototype method---------------
createUser.prototype.increment = function(){
    console.log(`${this.username} inflation is ${this.price + 1}`)    //adding this keyword is important because the function doesnt know the context on its own
}
createUser.prototype.printMe = function(){
    console.log(`${this.username} price is ${this.price}`);    
}

//new keyword - creates a new instance
const chai = new createUser("chai", 25)    //adding new keyword is important, because it creates a new instance of the object/function
const tea = new createUser("tea", 250)

chai.printMe()  //using the prototype
chai.increment()

tea.printMe()
tea.increment()



/* 

IMPORTANT NOTES:

Here's what happens behind the scenes when the new keyword is used:

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/