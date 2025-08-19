//for each loop(higher order function)-------------
const coding = ['js', 'ruby', 'java', 'python', 'cpp']
// coding.forEach( function(val){  //call-back function(doesnt have a name)
//     console.log(val);
// })


//using arrow function---------
// coding.forEach( (item) => {
//     console.log(item);
    
// })

//function reference method----------
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)      //only reference, not excuting it


//Multiple parameter in foreach loop--------
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);    
// })




//foreach loop in array of objects-----------------
const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]  //array of objects

myCoding.forEach( (item) => {
    console.log(`${item.languageName} file-extension is ${item.languageFileName}`);
    
})