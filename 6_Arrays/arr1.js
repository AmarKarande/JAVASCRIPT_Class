// Arrays Declaration
let array = [1, 2, 3, 4, 5];
console.log("Array: ", array);

// push(): Add element in last
array.push(6);
console.log("array after push(): ", array);

// pop() : remove last element
array.pop();
console.log("Array after pop():", array);

//Shift : remove first element
array.shift();
console.log("After shift : ", array);

// Unshift: add elements fromm start
array.unshift(0, 1);
console.log("Array after unshift:", array);

// For each loop for print an array element of an array
array.forEach(function (num) {
  console.log("Num is: ", num);
});

// 🚀
array.forEach((num) => {
  console.log("Num is: " + num);
});
let arr = new Array("Amar", "Nilesh", "Shahid", "Sahil", "Ajay");
arr.pop();
console.log("array is =  (❁´◡`❁)", arr);
arr.push("rk");
console.log(arr);

arr.forEach((names) => {
  console.log("Names is : 👽 ", names);
});

console.log(arr.indexOf("Shahid"));
arr.unshift("Ak", "Nil");
console.log(arr);

// MAP: Create an new array:
let mapsArr = arr.map((names) => names.toUpperCase());
console.log("mapArr", mapsArr);
console.log("typeof mapsArr: ", typeof mapsArr);
let mapArr = arr.map((namd) => {
  console.log(namd);
});

// Filter : create a array that can

let num = [12, 34, 5, 26, 74, 21, 67, 8, 99];
let small = num.filter((n) => n <= 30);
console.log("Small Array: ", small);
let big = num.filter((n) => n > 30);
console.log("Big Array : ", big);

// Spread Operator: // ... // allows you to copy the elements of an array into a new array
let namearr = [...arr];
console.log("Name Arr: ", arr);

//ArrayDestruction Operation = Store array values separately
let [n1, n2, n3] = arr;
console.log("n1 = ", n1);
console.log("n2 = ", n2);
console.log("n3 = ", n3);

// Concat: Joins an two array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = arr1.concat(arr2);
console.log("Arr3 = ", arr3);

// reduce() = reduce an array in  a single value by applying function
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current_val) => {
  return accumulator + current_val;
}, 0);
console.log("Sum = ", sum);

let mul = numbers.reduce((accumulator, current_val) => {
  return accumulator * current_val;
}, 1);
console.log("Mul : ", mul);
