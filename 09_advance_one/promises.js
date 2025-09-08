//Promises in Javascript-----------------
//promise object represents eventual completion(or failure) of 
// asynchronous operation and its result value

//1.
const promiseOne = new Promise(function(resolve, reject){
    //Do any async task
    //DB calls, crytography, network call, etc
    setTimeout(function(){
        console.log('1 Async task completed')
        resolve()       //resolve method can be used by .then
    }, 1000)
})
promiseOne.then(function(){
    console.log('1 promise is consumed')
})


//2. without using variable----------
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('2 Aync task done')
        resolve()
    }, 1000)
}).then(function(){
    console.log('2 Async task is resolved')
})


//3. passing valued using resolve----------------
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({id: "3", username: "Chai", email: "chai@example.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user)
})


//4. resolved & rejected condition and chaining .then--------------
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({id: "4", username: "samir", password: "123"})
        }else{
            reject('4 ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {         //then method is chainable or can be called thenable.
    console.log(username)
})
.catch((error) => {
    console.log(error)
})
.finally(() => console.log('4 the promise is either resolved or rejected'))


//5. Handling promises using async and await-----------------
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({id: "5", username: "javascript", password: "123"})
        }else{
            reject('5 ERROR: JS went wrong')
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive    //await method is used for task that needs some time
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()   //remember to call async function (vvi)


//api response(fetch) using async and .then-------------------
//1. async and await---

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()   //using await is important because it takes time before it is done
//         console.log(data)
//     } catch (error) {
//         console.log('E: ',error)
//     }
// }
// getAllUsers()


//2. then and catch
fetch('https://api.github.com/users/SamirKumar314')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

//also study promise.all