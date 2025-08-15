//Scopes of variables---------
/* Variables created in globally can be accessed
in a block scope, but variables declared inside a block
scope cannot be access outside of the scope itself */

//Global scope vs block scope-----------
let a = 300     //variable declared outside scope(globally) can be accessed inside block scope as well
if (true) {
    let a = 10  //variable declared using let and const keyword inside the scope can only accessed within the scope itself
    const b = 20
    var c = 30  //var keyword ignores all scopes
    // console.log("INNER: ", a);
}
// console.log(a)
// console.log(b)
// console.log(c)



//Nested scope(functions)---------
function one(){
    const username = "sammir"

    function two(){
        const website = " youtube"
        // console.log(username);  //variables from parent scopes can be accessed
    }
    two()
    // console.log(website);   //varible cannot be accessed
}
one()


//nested scope(if condition)--------
if (true) {
    const username = "kumar"
    if (username === "kumar") {
        const website = " youtube"
        // console.log(username + website); //accessing varible from parent scope                
    }
    // console.log(website);  //accessing from block scope not allowed
}
// console.log(username);    //accessing from block scope not allowed





// ++++++++++++++++++++++++++ Interesting factz about functions +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Declaring functions in different ways-----------
//(i)
// function addone(num){
//     return num+1
// }
// console.log(addone(5));

// //(ii)
// const addTwo = function(num){
//     return num+2
// }
// console.log(addTwo(5));



//Calling the functions--------
//(1) Calling function(i) throws no error
console.log(addone(5));
function addone(num){
    return num+1
}

//(2) Calling the function(ii) throws error, when
//calling the function before initializing the variable
console.log(addTwo(5));
const addTwo = function(){
    return num+2
}
