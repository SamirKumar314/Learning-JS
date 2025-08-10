//get cuurent date and time
let myDate = new Date()
// console.log(myDate);                 //shows current date and time
// console.log(myDate.toString());      //shows the dates in readable(string) format
// console.log(myDate.toDateString());  //shows only the day and date
// console.log(typeof myDate);


//create a specific date and time
// let myCreatedDate = new Date(2004, 0, 3)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2004, 0, 3, 18, 5)    //add more parameter to dates(i.e. time)
// let myCreatedDate = new Date("2023-01-14")         //changing the style of writing dates-
let myCreatedDate = new Date("01-14-2023")            //-doesnt change the date format
// console.log(myCreatedDate.toLocaleString());


//get timestamps in js
let myTimeStamp = Date.now()
// console.log(myTimeStamp);                   //shows the value in milliseconds by default
// console.log(myCreatedDate.getTime());       //converts the created date into timestamp
// console.log(Date.now()/1000);               //converts the value from ms to sec
// console.log(Math.floor(Date.now()/1000));   //rounds the value to a whole number


//get a specific part of a date(day/time/month/etc)
let newDate = new Date()
console.log(newDate);              //current date and time
console.log(newDate.getMonth()+1); //month starts from 0 therefore (+1)
console.log(newDate.getDate());    //specific date
console.log(newDate.getDay());     //day of the week(sunday=0)


//use string interpolation to use dates inline(backticks``)
console.log(`${newDate.toDateString()} is the date`);


//define parameters inside a method
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Europe/London"
}));