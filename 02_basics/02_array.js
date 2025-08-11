//arrays part2
//merging arrays-1
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)  //this creates a nested array or sub-array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//merging arrays-2
// const allHeros = marvel_heros.concat(dc_heros) //it concatenates two arrays and returns a new array
// console.log(allHeros);                         //also doesnt affects original arrays

//merging arrays-3(spread method)
const all_new_heros = [...marvel_heros, ...dc_heros]  //spread method is similar to concat, but it lets user concate arrays more than two
// console.log(all_new_heros);                        //doesnt affects original arrays because it copies element to a new array


//convert sub-arrays to simple array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)  //adjust the depth at which you want invoke the effect
// console.log(real_another_array);


//Using Array constructor
//1
console.log(Array.isArray("samir"));       //check if item is an array(returns bool)
//2
console.log(Array.from("samir"));          //converts to array
//3
console.log(Array.from({name: "samir"}));  //specify what the array needs to return, otherwise returns empty array(i.e. [])

//4
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
//takes all the elements and converts it to an array