// console.log("Hello World!");
// process.stdout.write("hello world!");
// console.table({ name: "admin" });
// console.warn({ name: "admin" });

/**
 * data types in JS:
 * String (collection of characters)
 * Number (both int and float)
 * Bigint (used to store 2^53-1 length integers)
 * Boolean (true or false)
 * undefined (data which cannot be defined)
 * null (empty)
 * object (collection or similar to array)
 * symbol (unique value or unique data)
 */

/**
 * Declaration of variables
 * 1) var =
 * 2) let
 * 3) const = if declare once cannot change
 */

// String
var name = "amar";
console.log("name =", name);

// Integer/ Number
var marks = 20;
console.log("marks =", marks);

// Boolean
var isloogedin = true;
console.log("isloogedin =", isloogedin);

// Bigint 2^53 -1
var num = 1.7592186e13;
console.log("num =", num);

// Object
let fruits = ["apple", "banana", "cherry", "strawbery"];
console.log("fruits =", fruits);
console.table(fruits);

let emp = {
  name: "amar",
  age: 22,
  salary: 0,
  location: "Pune",
};
console.table(emp);

//constant variables
//  throws error because of const and username not changed
// const username = "amar";
// username = "amarkarande";
// console.log(username);
