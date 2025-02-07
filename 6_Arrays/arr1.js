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
