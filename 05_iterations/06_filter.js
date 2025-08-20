//Limitations of foreach loop--------
// const coding = ['js', 'ruby', 'java', 'python', 'cpp']
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item       //foreach doesnt return any values
// })
// console.log(values);  //returns undefined


//alternatives to foreach are------------
//filter operator--
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num > 4;   //returning values is allowed
// })
// console.log(newNums)

// //2. filter operator with implicit return function---
// const newNums2 = myNums.filter( (num) => (num > 5))  //no need to write a return statement
// console.log(newNums2);

// //3. alt method using the foreach loop----
// const newNums3 = []
// myNums.forEach( (num) => {
//     if (num > 6) {
//         newNums3.push(num)   //no need to return values
//     }
// })
// console.log(newNums3);



// More examples on filter---------------
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => (bk.genre === 'History'))
// console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
})
console.log(userBooks);
