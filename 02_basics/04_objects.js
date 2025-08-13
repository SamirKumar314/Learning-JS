//Creating objects using Constructor(singleton object)

// const tinderUser = new Object()  //both the constructor and literal method have no fucntional difference

const tinderUser = {} //literal
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false
// console.log(tinderUser);

//Objects within object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
//we can access any item of the object, just by adding dot operator




//Merging objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// simply merging two objects
// const obj3 = {obj1, obj2}  //obj3 simply includes two objects(obj1, and obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4) //when using assign the first parameter is alwsys the target object where the values will be copied

//Spread method to merge objects
const obj3 = {...obj1, ...obj2, ...obj4}  //widely used and easier
// console.log(obj3);



//Objects within an array
//whenever data comes from database, its in the form of arrays of multiple objects
const users = [
    {
        id: 1,
        email: "hc@gmail.com"
    },
    {
        id: 2,
        email: "hc@gmail.com"
    },
    {
        id: 3,
        email: "hc@gmail.com"
    }
]
users[1].email  //we can access items from arrays of object



//Get all the key and values of an object
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));    //returns all the keys in array format
// console.log(Object.values(tinderUser));  //returns all the values in array format
// console.log(Object.entries(tinderUser)); //returns all the keys and values in pairs in array format

// console.log(tinderUser.hasOwnProperty('name')); //we can look more method for object through inspect page in any browser





//++++++++++++++++++++++++++++ PART_3 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//De-structuring the object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor  //accessing the object

// const {courseInstructor} = course  //destructured way of accessing objects
// console.log(courseInstructor);

const {courseInstructor: instructor} = course  //we can also rename any obejct item
console.log(instructor);



//api and json overview
//previously api return values were written in xml structures
//but nowadays its written in json(which is similaar to an object)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//api format can also be in array format
[
    {},     //array of objects
    {},
    {}
]