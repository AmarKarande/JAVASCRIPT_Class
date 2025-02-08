// Declaration of Strings
let str = "my name is amar";
console.log("Str=", str);
let str2 = "amar"; // 'string'
str2 = `Hello world`;
console.log("Str2=", str2);

let fname = "amar";
let lname = "karande";

// concat= add two strings
let concat = fname + " " + lname;
console.log("Concat String is =", concat);
console.log(fname + " " + lname);
let another = `${fname} ${lname}`;
console.log("Using literal: ", another);

// replace the strings
let greet = "Hello my name is rameshwar. I am engineer!";
console.log("UpperCase: ", greet.toUpperCase());
console.log("Lowercase:", greet.toLowerCase());
console.log(greet.replace("rameshwar", "raj"));

// Print  : I Love "india"
let ind = 'I love "India"';
console.log("Ind= ", ind);

// Multi line strings:
let eg = `To correctly sort the numbers in ascending order numerically,
        you need to pass a compareFunction to sort().
        Here's how you can do it:`;
console.log("Para =", eg);

// Strings are immmutable
let strs = "raja";
strs[0] = "R";
console.log("Strs = ", strs);

// How to change characters
let n1 = "rameshwar";
let rest = "R" + n1.slice(1);
console.log("Name is = ", rest);
n1 = "raj";
console.log("Using replace = ", n1.replace("r", "R"));
