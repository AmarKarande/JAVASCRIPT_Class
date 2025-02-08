/**
 * Patterns in JavaScript often refer to regular expressions (regex), which are used for matching patterns in strings. Regular expressions are very powerful tools for searching, replacing, and validating strings based on specific patterns.
 */

// create a Regular Expression
//literal notation
let regexp1 = /rameshwar/;
console.log("regexp1 =", regexp1);

//constructor notation
let regexp2 = new RegExp("mittal");
console.log("regexp2 = ", regexp2);

//basic patterns
//Literal characters:
if (regexp1.test("rameshwar")) {
  //compare str to RegExp using test()
  console.log("Both name and regexp match!");
}

if ("mittal".match(regexp2)) {
  //compare str to RegExp using match()
  console.log("both mittal and regex2 match");
}
if ("mittal" === regexp2.toString().slice(1, -1)) {
  // "/"1 and "/"-1
  //compare str to RegExp using match()
  console.log("both mittal and regex2 match");
}
