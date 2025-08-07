const name = "samir"
const repoCount = 50

// console.log(name + repoCount + "Value"); //This type of code is not used
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this method of writing console log is much more in use currently

// const StringName = "samir-kr" //old technique
const gameName = new String('hitesh-hc-com') //this supports many functions for strings
// console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);  //returns the length of the string
// console.log(gameName.toUpperCase());  //converts the string into uppercase
console.log(gameName.charAt(2));  //finds characters inside the string
console.log(gameName.indexOf('t'));  //returns the index of the requested character

const newString = gameName.substring(0, 4) //returns string from 0 to 3 index
console.log(newString);

const anotherString = gameName.slice(-12, 4)  //negative values are allowed(works similar to substring)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);  //shows with whitespaces
console.log(newStringOne.trim());  //removes whitespaces

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));  //replaces the searched value with the replacedValue
console.log(url.includes('hitesh'));  //searches and returns a bool


console.log(gameName.split('-'));  //breaks the string when '-' appears

// All string functions available
// String {'samir-sk-com'}
// [[Prototype]]
// : 
// String
// anchor
// : 
// ƒ anchor()
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()
// charAt
// : 
// ƒ charAt()
// charCodeAt
// : 
// ƒ charCodeAt()
// codePointAt
// : 
// ƒ codePointAt()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ String()
// endsWith
// : 
// ƒ endsWith()
// fixed
// : 
// ƒ fixed()
// fontcolor
// : 
// ƒ fontcolor()
// fontsize
// : 
// ƒ fontsize()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// isWellFormed
// : 
// ƒ isWellFormed()
// italics
// : 
// ƒ italics()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// link
// : 
// ƒ link()
// localeCompare
// : 
// ƒ localeCompare()
// match
// : 
// ƒ match()
// matchAll
// : 
// ƒ matchAll()
// normalize
// : 
// ƒ normalize()
// padEnd
// : 
// ƒ padEnd()
// padStart
// : 
// ƒ padStart()
// repeat
// : 
// ƒ repeat()
// replace
// : 
// ƒ replace()
// replaceAll
// : 
// ƒ replaceAll()
// search
// : 
// ƒ search()
// slice
// : 
// ƒ slice()
// small
// : 
// ƒ small()
// split
// : 
// ƒ split()
// startsWith
// : 
// ƒ startsWith()
// strike
// : 
// ƒ strike()
// sub
// : 
// ƒ sub()
// substr
// : 
// ƒ substr()
// substring
// : 
// ƒ substring()
// sup
// : 
// ƒ sup()
// toLocaleLowerCase
// : 
// ƒ toLocaleLowerCase()
// toLocaleUpperCase
// : 
// ƒ toLocaleUpperCase()
// toLowerCase
// : 
// ƒ toLowerCase()
// toString
// : 
// ƒ toString()
// toUpperCase
// : 
// ƒ toUpperCase()
// toWellFormed
// : 
// ƒ toWellFormed()
// trim
// : 
// ƒ trim()
// trimEnd
// : 
// ƒ trimEnd()
// trimLeft
// : 
// ƒ trimStart()
// trimRight
// : 
// ƒ trimEnd()
// trimStart
// : 
// ƒ trimStart()
// valueOf
// : 
// ƒ valueOf()
// Symbol(Symbol.iterator)
// : 
// ƒ [Symbol.iterator]()
// [[Prototype]]
// : 
// Object
// [[PrimitiveValue]]
// : 
// ""
// [[PrimitiveValue]]
// : 
// "samir-sk-com"