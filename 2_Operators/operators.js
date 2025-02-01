//Arithmatic Operators
let a = 30;
let b = 20;
let c = 10;
console.log("add = ", a + b);
console.log("Sub = ", a - b);
console.log("mul = ", a * b);
console.log("Divide", a / b);
console.log("Remainder=", a % b);

// Assignment Operator
b = 20;
console.log("b =", b);
b += 10;
console.log("b =", b);
b *= 10;
console.log("b =", b);
b -= 5;
console.log("b =", b);
b /= 5;
console.log("b =", b);
b %= 5;
console.log("b =", b);

// Comparison Operator

let d = 20;
console.log("b == d", b == d);
console.log("a!=b", a != b);
console.log("a == b", a == b);
console.log("=== ", "Hello" === "Hello"); //strictly equals to check the both value and data types
let num = 20;
let x = "20";
console.log("=== ", num === x);
console.log("a < b =", a < b);
console.log("b > c =", b > c);
console.log("a >= b =", a >= b);

// Logical Operators
let b1 = true;
let b2 = false;
console.log("&& =", b1 && b2);
console.log("&& =", b2 && b2);
console.log("|| =", b1 || b2);
console.log("!b1 =", !b1);

// Bitwize Operator
console.log("4 & 4=", 4 & 5); //Bitwize and
console.log("4 | 4=", 4 | 5); // Bitwize or
console.log("6^7 = ", 4 ^ 4); // Bitwize XOR
console.log("Nor ~4 = ", ~4); //Bitwize NOT

// Ternary Operator
const marks = 89;
marks >= 60 ? console.log("Eligible!") : console.log("Not Eligible!");

// const marks = 58;
// let eligibility = marks >= 60 ? "Eligible" : "Not Eligible!";
// console.log(eligibility);

// Comma Operator
console.log(",: ", (a = 21), (b = 9), a + b);

//Unary Operator
let v = 20;
console.log("++v =", ++v); //Pre Increment
console.log("v++ =", v++); //Post increment
console.log("v++ =", v++);
console.log("--v =", --v);
console.log("v-- =", v--);
console.log("v-- =", v--);

// Relational Operator
const student = {
  name: "amar",
  id: 1,
  class: "10th",
};
console.log(student);
console.log("Id: ", "id" in student); //in for check value is present or not
console.log("class: ", "class" in student);
console.log("Sal: ", "sal" in student);

// class
class fruits {
  fruits(name) {
    this.name = name;
    console.log(this.name);
  }
}
let apple = new fruits("apple");
console.log("instanceof: ", apple instanceof fruits);

//String Operators
let personName = " Fname " + " Mname " + " Ename ";
personName += " String ";
console.log("Personame=", personName);

// Chaining Operator
let product1 = {
  car_company: "TATA",
  car_name: "Safari",
  car_fuel: "Diesel",
  car_price: { original_price: "13 lk", discount_price: "12.50 lk" },
};
console.log(product1);
let product2 = {
  car_company: "MAHINDRA",
  car_name: "THAR",
  car_fuel: "Diesel",
  car_price: { original_price: "14 lk" },
};
console.log("?.", product1?.car_price?.original_price);
console.log("?.", product2?.car_price?.original_price);
console.log("?.", product1?.car_fuel);
