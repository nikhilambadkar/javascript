//THROUGH CONSTRUCTOR
//    Object.create
// -----------------------------------------------------------------------------------
//OBJECT LITRALS

// defining key of an object using Symbol

const mySymb= Symbol("key1");


const jsUser={
    "surname":"ambadkar",
    "full name":"Nikhil Ambadkar",
    "email":"nikhilAmbadkar@gmail.com",
    [mySymb]:"mySymb"

};

// console.log(jsUser.surname);
// console.log(jsUser["full name"]);

//freezing an object
Object.freeze(jsUser);

// console.log(jsUser);

// object with function is left 






// ----------------------------------------------------------
// Declaring object with constructor, SingleTon

let objSingleton = new Object();
let objLitral={};


/* ----------------------Object Destructure------------------------------*/
  let myCourse={
    "courseName":"JavaScript",
    "courseInstructor":"Nikhil",
    "coursePrice":"999"
  }

//   const {courseName,courseInstructor,coursePrice}=myCourse;

//   console.table([courseName,courseInstructor,coursePrice]);

const {courseName:name,courseInstructor:instructor,coursePrice:price}=myCourse;
  console.table([name,instructor,price]);


 