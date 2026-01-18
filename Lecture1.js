// Variables and data types in JavaScript

console.log("Hello World");                 // console.log is used to log (print) message on the console.
console.log("hello JS fellows");            // console always write code in next line. 

// Data Types in JS   (7 primitive data types)
// Primitive data types
/* 1. Number
   2. String
   3. Boolean
   4. Undefined
   5. Null
   6. BigInt
   7. Symbol
*/

let age = 20;                               // number data type
let firstName = "John";                     // string data type
let isStudent = true;                       // boolean data type
let x;                                     // undefined data type
let y = null;                              // null data type
let bigNumber = 12345678901234567890n;      // BigInt data type
let bigNumber2 = BigInt("123");             // BigInt data type using BigInt() function
let sym = Symbol("id");                     // Symbol data type


// Data Types in JS (non-primitive data type)
/*  Objects
    arrays
    functions
*/

// objects in JavaScript

const student = {
    fname : "Pawan",
    lname : "Kumar",
    age : 26,
    marks : 90,
    isPassed : true
};

console.log(student);
console.log(typeof student);               // typeof operator is used to know the data type of a variable.
console.log(typeof age);
console.log(typeof firstName);

console.log(student.fname);               // Accessing object properties using dot notation
console.log(student['age']);              // Accessing object properties using bracket notation

student.age = student.age + 1          // Updating the object value
console.log(student.age);                // Accessing object value after updating it


// Let's Practice
// PROBLEM 1
// Create a const object called “product” to store information shown in the picture.

const product = {
    proName : "Pen",
    rating : 4.5,
    price : 270,
    offer : 5
};

// to view on console or print

console.log(product);
console.log(product.price);             // to show specifice properties


// PROBLEM 2
// Create a const object called “profile” to store information shown in the picture.

const profile = {
    userName : "shradhakhapra",
    isFollow : true,
    followers : 5690000,
    following : 4,
    fullName : "Shradha Khapra",
    title : "Enterprenue",
    profileBio : "Apna College "
};

console.log(profile);
console.log(profile.title);
console.log(profile['isFollow'])

console.log(typeof(profile));
console.log(typeof(profile['isFollow']))
