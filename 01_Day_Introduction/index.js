console.log(01, "Day Introduction");
// This is a single line comments
/*
This is a multiline comment  
 Multiline comments can take multiple lines  
 JavaScript is the language of the web  
 */
console.log(2 + 4); //Addition
console.log(7 - 2); //Substraction
console.log(5 * 7); //Multiplication
console.log(6 / 3); //Division
console.log(7 % 2); //Modulus - Find remainder
console.log(3 ** 3); //Exponentiation --3**3

// JavaScript datatypes
console.log(typeof "Peter"); //string
console.log(typeof 5); //number
console.log(typeof 7.5); //float number
console.log(typeof true); //boolean
console.log(typeof null); //object type
console.log(typeof undefined); // undefined

// A valid JavaScript variable name must follow the following rules:

// A JavaScript variable name should not begin with a number.
// A JavaScript variable name does not allow special characters except dollar sign and underscore.
// A JavaScript variable name follows a camelCase convention.
// A JavaScript variable name should not have space between words.

const firstName = "Peter";
const lastName = "Njuguna";
let age = 28;
let isMarried = false;
const country = "Kenya";

console.log(
  `My name is ${firstName} ${lastName} current aged ${28} years old and I lives in ${country}.`
);
