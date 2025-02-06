// let doors = 100;
// let monkey = 3;

// let closedCount = 100;
// let openCount = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % monkey == 0) {
//     openCount++;
//     closedCount--;
//   }
// }
// console.log("Open door = ", openCount);
// console.log("Closed door =", closedCount);

const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let closeddoors = 100;
let opendoors = 0;

rl.question("Enter a monkey value:", (monkey) => {
  for (let i = 1; i <= 100; i++) {
    if (i % monkey == 0) {
      opendoors++;
      console.log("Open doors: ", i);
      closeddoors--;
    }
  }
  console.log("Open door is = ", opendoors);
  console.log("Closed door is =", closeddoors);
});
