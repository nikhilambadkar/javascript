
// In javascript way of defining const is below one
const userId=11234;

// And there are two way of defining variable in js (let & var) 
let userEmail="nikhil@gmail.com";
var userName="Nikhil";
userCity="Indore";
let userState;  //Here I only declare a variable

//What is scope in javascript
// code written in curly bracket is nothing but scope
{
//this is scope :)
}


/*
Always try to not use var when define a variable
Because of issue in block scope & functional scope

*/

console.log(userId);
console.table([userId,userEmail,userName,userCity,userState]);

