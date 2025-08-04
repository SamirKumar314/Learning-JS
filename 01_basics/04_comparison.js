// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1);   // In Javascript comparison operators
// console.log("02" > 1);  // converts the string into number

console.log(null > 0);  //(i)false
console.log(null == 0); //(ii)false
console.log(null >= 0); //(iii)true
/* the reason behind this is inconsistency is that an equality check(==)
and comparisons operator(>,<,>=,<=) works differently

Comparison converts the null into a number, treating it as zero(0).
Thats why (iii)null >=0 is true and (i)null > 0 is false. */

// console.log(undefined ==  0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false

// === (strict check)This checks the values as well as their datatypes.
console.log("2" === 2); //false
console.log(2 === 2); //true