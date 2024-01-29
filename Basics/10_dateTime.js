//Date
//creating instance of date

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2024 , 0, 14);
// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

console.log(myTimeStamp/1000);
console.log(Math.floor(myTimeStamp/1000));