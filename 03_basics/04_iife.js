//Immediately Invoked Function Expressions (IIFE)-----------------
//- IIFE functions can execute immediately after creation
//- this is basically '()()' , where first parenthesis  contains the function and second executes it
//- to reduce the global scopes pollution, this function is often used

//named iife function-
(function chai(){
    console.log(`DB CONNECTED`);
})();

//unnamed iife function(arrow function)--
(() => {
    console.log(`DB CONNECTED TWO`);
})();

//passing parameter to iife function---
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('samir')   //passing argument to iife function


/***************************************************************
    NOTE:
    When there are more than one iife function,
    then always and semicolon(;) at the end of the function.
    "()();"
****************************************************************/