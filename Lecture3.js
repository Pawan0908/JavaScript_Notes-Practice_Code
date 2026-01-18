/* Loops and Strings 

// LOOPS IN JAVASCRIPT

// for Loop in JavaScript

let i = 1;
for(i = 1; i <= 5; i++){
    console.log("Hello World!", i);
}
console.log(i);


// Counting down from 5 to 1

for(let i = 5; i >= 1; i--){
    console.log("Counting down:", i);
}   


// Print first N natural numbers using for loop. (N is user input)  
let N = parseInt(prompt("Enter a number:"));

for(let i = 1; i <= N; i++){
    console.log(i);
}



// while Loop in JavaScript

let a = 10;
while (a <= 10) {
  console.log(a);
  a++;
}



// do-while Loop in JavaScript

let b = 5;  
do {
    console.log(b);
    b++;
} while(b <= 10);


// for-of Loop in JavaScript
// It used for string and arrays

let fName = "Pawan";
for(let i of fName){                // iterator -> find out each characters in variable.
    console.log("i =", i);
}

let lName = "Sorde";
let len = 0;
for(let val of lName){{
    console.log("val of :", val)
    len++;
}}

console.log(len); 



// for-in Loop in JavaScript

let student = {
    name: "Pawan",
    age: 26,
    marks: 92
};

for(let key in student){
    console.log("key:", key, "value:",student[key]);
}


// Let's Practice
// PROBLEM 1
// Print all even numbers form 0 to 100

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }    
}

oddNo = 0;

while(oddNo <= 100){
    if(oddNo % 2 !== 0){
        console.log(oddNo);        
    }
    oddNo++;   
}


// PROBLEM 2
// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct number.

let orgNum = 52;
let gNum;

while (gNum !== orgNum) {
    gNum = Number(prompt("Enter any random number (0 - 100)"));

    if (gNum === orgNum) {
        console.log("You guessed the correct number:", gNum);
    } else {
        console.log("Try again");
    }
}

//==========================================================================================================================================================================

// STRING METHODS IN JAVASCRIPT


let str1 = "First String";

let str2 = 'Second String';

console.log(str1.length);

console.log(str2.length);

console.log(str1[0]);

console.log(str1[1], str1[8])           // string charecter at 1st & 8th position


// TEMPLATE LITERALS IN JAVASCRIPT
// Time stamp:     03:14:20

let specialStr = `This is a special string
that spans multiple lines.
It can also embed expressions like 2 + 3 = ${2 + 3}.`;

console.log(specialStr);

// we can write object in template literals string.

let studentInfo = {
    fName : "Pawan",
    lName : "Sorde",
    currentAge : 25,
};

let infoStu = `Full Name: ${studentInfo.fName} ${studentInfo.lName} is a student of SPPU University.
Age is ${studentInfo.currentAge}.`

console.log(infoStu);



// String to Upper Case and Lower Case and trim()

let myString = "Hello, World!"; 
console.log(myString.toUpperCase());                // Output: "HELLO, WORLD!"
console.log(myString.toLowerCase());                // Output: "hello, world!"

let stringWithSpaces = "   Hello, World!   ";
console.log(stringWithSpaces.trim());               // Output: "Hello, World!"

// String str.slice(start, end?) and str.replace( searchVal, newVal )

let strSlice2 = "This is slice string";
console.log(strSlice2.slice(2));                    // Output: "is is slice string"
console.log(strSlice2.slice(2, 10));                // Output: "is is sl"

let strReplace = "this is replace method";
console.log(strReplace.replace("this", "It"));      // Output: "It is replace method"

// String str.concat( str2, str3, ... ) and str.charAt(index)

let strConcat1 = "Hello, ";
let strConcat2 = "World!";
console.log(strConcat1.concat(strConcat2));        // Output: "Hello, World!"
console.log(strConcat1.charAt(1));                 // Output: "e"
console.log(strConcat2.charAt(5));                 // Output: "!"
*/

// Let's Practice
// PROBLEM 1
// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.
// eg. use name = "Pawan Sorde" -> username = "@PawanSorde11"

let userFullName = prompt("Enter Full Name: ");

let userName = `@${userFullName.replaceAll(' ', '')}${userFullName.length}` // replaceAll() method to remove spaces

console.log(userName);

