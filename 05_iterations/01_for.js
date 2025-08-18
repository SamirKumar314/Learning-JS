//for loop structure--------
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// 1- if statement in for--------------
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element)
    
}

// 2- Nested loop--------------
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop: ${j} and outer loop ${i}`)
        // console.log(i + ' * ' + j + ' = ' + i*j);       
    }
}

// 3- array in for-----------
let myArray = ['flash', 'batman', 'superman']
// console.log(`Array length is ${myArray.length}`)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);    
}

//Break and continue--------
//break-
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;    //breaks out of the loop/stops the loop
//     }
//     console.log(`value of i is ${index}`)    
// }


//continue--
for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log(`Skipping 5`);
        continue;  //skips the current iteration and continues from the next iteration
    }
    console.log(`value of i is ${index}`)    
}