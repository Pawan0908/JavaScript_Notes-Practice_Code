// Object in javaScript
// An object is a collection of properties, and a property is an association between a name (or key) and a value.
// Example:

let student = {
    name: "Pawan",
    age: 26,
    marks: 92
};


/* 

// Arrays in JavaScript
// An array is a special variable that can hold more than one value at a time.
// Example:

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let marks = [85, 90, 78, 92];
let mixedArray = ["Pawan", 26, true, 92.5];             // not a good practice 

console.log(fruits);
console.log(marks);
console.log(mixedArray);
console.log(marks.length);            // Length of array

console.log(typeof(marks));           // object => it also store the info as pair of key - value, but only differenc is that it's index position is key and value is in show in array.

*/
// Array Indices

let arrIndices = [1 , 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arrIndices[0]);          // 1
console.log(arrIndices[3]);          // 4
console.log(arrIndices[5]);          // 5


arrIndices[5] = 0;
console.log(arrIndices);            // arrIndices = [1, 2, 3, 4, 5, 0, 7, 8, 9];


// Looping over an Array =: Print all elements of an array

