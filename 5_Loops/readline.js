// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Enter a value of a: ", (a) => {
//   rl.question("Enter a value of b : ", (b) => {
//     // console.log(`Value of a is : ${a}`);
//     // console.log(`Value of b is : ${b}`);
//     console.log("Sum of a and b =", parseFloat(a) + parseFloat(b));

//     rl.close();
//   });
// });

let str = "AmarKarande";
let i = 0;
let result = "";
while (i < str.length) {
  result += str[i] + " ";
  //   console.log(str[i]);
  i++;
}
console.log("Result : ", result);
