//arrays
//arrays can store multiple items in a single varaible
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj", "dhruv"] //it can contain different types of datatypes

//declare array using new keyword
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);



//Arrays methods
//push and pop
// myArr.push(6)        //adds the element at the end
// console.log(myArr);
// myArr.pop()          //removes the last element
// console.log(myArr);

//shift and unshift
// myArr.unshift(9)     //adds the element at the start of the array
// console.log(myArr);  //and shifts all the other element by +1
// myArr.shift()        //removes the element on the start and shift the element by -1
// console.log(myArr);

//includes and indexOf
// console.log(myArr.includes(9)); //searches for the element and returns a boolean
// console.log(myArr.indexOf(9));  //returns -1 if not found
// console.log(myArr.indexOf(3));


//join method to convert array into string
const newArr = myArr.join()
// console.log(myArr);   //doesnt change the original string
// console.log(newArr);  //conveerted to string type format

//slice and splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)       //slice() copies required part of the original array into a different array
console.log(myn1);                   //original array stays unaffected when using slice
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)      //splits the original arrays into two arrays
console.log("After splice ",myArr);  //splice changes the original array
console.log(myn2);