//For-in loop------------------------
//in Objects--
const myObjects = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObjects) {
    // console.log(`${key} is ${myObjects[key]}`);
    
}

//for-in loop in array------
const programming = ['js', 'rb', 'py', 'java', 'cpp']
for (const key in programming) {
    // console.log(programming[key]);
    
}

//does for-in loop for Map() work?--------------------nope
// const map = new Map()
// map.set('IN', 'INDIA')
// map.set('USA', 'United States of America')
// map.set('Fr', 'France')
// map.set('IN', 'INDIA')
// for (const key in map) {
//     console.log(key);
        
// }