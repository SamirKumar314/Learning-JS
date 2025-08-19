//for-Of loop----------
//important:
// ["", "", "", ""]   //array of strings
// [{}, {}, {}]   //array of objects


//forOf loop in arrays--------
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

//for Of loop in string---------
const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

//Maps--------
/* 
    Its is an object that holds key-value pairs and remembers
    original order of insertion of the keys.
*/

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'INDIA')      //doesnt takes duplicate values
// console.log(map);

//For Of loop inn Maps----------
for (const key of map) {
    // console.log(key);
    
}
//take keys and values separately----
for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

//Does for-of loop in Objects works?---------nope
// const myObjects = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }
// for (const [key, value] of myObjects) {
//     console.log(key, ":-", value);
    
// } //throws error
