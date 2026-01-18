// Operators & conditional Statments

//Comments in JavaScript
// Part of code which is not executed

// Single line comment

/* Multi line comment
   This is a multi line comment
   in JavaScript
*/
/* 
console.log("Welcome to JS Lecture 2");

// Opertors in JavaScript
// Arithmetic Operators: +, -, *, /, %

let a = 5;
let b = 2;
console.log("a + b =", a + b);      // Addition
console.log("a - b =", a - b);      // Subtraction
console.log("a * b =", a * b);      // Multiplication
console.log("a / b =", a / b);      // Division
console.log("a % b =", a % b);      // Modulus : Remainder after division
console.log("a ** b =", a ** b);    // Exponentiation : a raised to the power b ie. a^b


// Uniary Operators: ++, --
let x = 10;
let y = 5;

console.log("x++ =", x++);         // It will increment the value of x but return the old value (post-increment)
console.log("After x++ , x =", x);  // Value of x after increment
console.log("++x =", ++x);          // Increment and return the new value (pre-increment)

console.log("y-- =", y--);         // It will decrement the value of y but return the old value (post-decrement)
console.log("After y-- , y =", y);  // Value of y after decrement
console.log("--y =", --y);          // Decrement and return the new value (pre-decrement)


// Assignment Operators: =, +=, -=, *=, /=, %=, **=

let p = 10;
let q = 20;
let z = 21;
let w = 5;

p += 5;               // p = p + 5
console.log("After p += 5, p =", p);
p -= 4;              // p = p - 4
console.log("After p -= 4, p =", p); 
q *= 2;               // q = q * 2
console.log("After q *= 2, q =", q);
p **= 3;              // p = p ^ 3
console.log("After p **= 3, p =", p);
z %= 7;              // q = q % 7
console.log("After z %= 7, z =", z);  
 
w /= 2;              // q = q / 2
console.log("After w /= 2, w =", w);


// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=

let m = 10;
let n = "10";

console.log("m == n :", m == n);        // true : checks value only
console.log("m === n :", m === n);      // false : checks value and type
console.log("m != n :", m != n);        // false : checks value only
console.log("m !== n :", m !== n);      // true : checks value and type
console.log("m > n :", m > n);          // false
console.log("m < n :", m < n);          // false
console.log("m >= n :", m >= n);        // true
console.log("m <= n :", m <= n);        // true


// Logical Operators: &&, ||, !

let age = 19;
let hasLicense = true;
let hasVoterId = true;
let hasMarride = false;

console.log("Is eligibal to drive:", (age >18) && hasLicense);
console.log("Is eligible to vote:", (age> 18) || hasVoterId );
console.log("Is eligibal to marrige:", ! ((age > 18) && hasMarride));
console.log("Is eligibal to marrige:", ! (age > 18));
console.log("Is eligibal to marrige:", ! hasMarride);


// Ternary Operator: ? :

let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);

// ==========================================================================================================================================================================

// Conditional Statements

// if Statement

let mode = "light" ;
let color ;

if(mode === "dark"){
   color = "black";    
   console.log(color);
}

if(mode === "light"){
   color = "white";   
   console.log(color);
}


// if-else Statement

let age = 18;

if(age >= 18){
   console.log("Have Driving license")
}else{
   console.log("Not eligible for driving")
}

let num = 4;

if (num % 2 == 0){
   console.log("num is even: ", num)
}else{
   console.log("num is odd: ", num)
}


// else-if Statement

let mode = null ;
let color ; 

if(mode === "dark"){
   color = "black";    
   console.log(color);
}else if(mode === "light"){
   color = "white";   
   console.log(color);
}else{
   color = "orange";   
   console.log(color);
}



// Let's Practice
// PROBLEM 1
// Get user to input a number using prompt("enter a number:"). Check if the number is a multiple of 5 or not.


let no = prompt("enter a number");

if(no % 5 === 0){
   console.log(no, "is multiple of 5")
}else{
   console.log(no, "isn't multiple of 5")
}
*/

// PROBLEM 2
// Write a code which can give grades to a student based on marks scored.
// 90 and above - A grade
// 80 to 89 - B grade
// 70 to 79 - C grade
// 60 to 69 - D grade
// below 60 - F grade

let marks = prompt("Enter you marks");

if(marks >= 90 && marks <= 100){
   console.log("A grade");
}else if(marks >= 80 && marks <= 89){
   console.log("B grade");
}else if(marks >= 70 && marks <= 79){
   console.log("C grade");
}else if(marks >= 60 && marks <= 69){
   console.log("D grade");
}else{
   console.log("F grade");
}