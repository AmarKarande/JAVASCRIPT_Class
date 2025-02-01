/**Primitive DataTypes in Javascript
 * String (collection of characters)
 * Number (both int and float)
 * Bigint (used to store 2^53-1 length integers)
 * Boolean (true or false)
 * undefined (data which cannot be defined)
 * null (empty)
 * object (collection or similar to array)
 * symbol (unique value or unique data)
 */
//  * Number (both int and float)

// let number1 = 20;
// console.log("Number1 = ", number1);
// console.log(typeof number1);

// number1 = 21.2939272428;
// console.log("Number1 = ", number1);
// console.log("type of number1 = ", typeof number1);

// // String (collection of characters)
// let name1 = "Amar";
// console.log("Name1 = ", name1);
// console.log("Type of name1 = ", typeof name1);
// name1 = "Ak";
// console.log("Name 2 = ", name1);

// //  Boolean (true or false)
// let isLogin = true;
// console.log(isLogin);
// console.log("Type of isLogin = ", typeof isLogin);
// isLogin = false;
// console.log(isLogin);

// // undefined (data which cannot be defined)
// let num3;
// console.log("Num3 = ", num3);
// console.log("Type of Num3 = ", typeof num3);

// num3 = 20;
// console.log("Num3 = ", num3);

// //  * null (empty)
// let n = null;
// console.log("n = ", n);
// console.log("Type of n = ", typeof n);

// Non primitive datatypes in Javascript
// Array: collection of same datatypes
let fruits = ["Apple", "Banana", "Cherry", "Grapes", "Mango"];
console.log("Fruits = ", fruits);
console.log("1st fruit is =", fruits[0]);
console.log("Type of fruits = ", typeof fruits);
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers = ", numbers);
console.log("5th number is =", numbers[4]);
console.log("Type of numbers = ", typeof numbers);

// Object : key: value
let cars = {
  car_company: "TATA",
  car_model: "TATA Safari",
  car_price: "20lakhs",
  car_fuel: "Diesel",
  car_capacity: 6,
};

console.log("Cars = ", cars);
console.log("Car Company = ", cars.car_company);
console.log("Car Model= ", cars["car_model"]);

cars = {
  car_company: "TATA",
  car_model: "TATA Curv",
  car_price: "15lakhs",
  car_fuel: "CNG,EV",
  car_capacity: 4,
};

console.log("Cars = ", cars);
console.log("Car Capacity = ", cars.car_capacity);
console.log("Car Fuel= ", cars["car_fuel"]);
cars = {
  car_company: "MAHINDRA",
  car_model: "THAR",
  car_price: "15lakhs",
  car_fuel: "Diesel",
  car_capacity: 4,
};
console.log("Cars = ", cars);
console.log("Car model = ", cars.car_model);
console.log("Car capacity= ", cars["car_capacity"]);
