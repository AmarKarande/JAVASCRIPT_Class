let budget = 1000;
let department = 5;
let percentage = [20, 30, 20, 10, 10];
// percentage.sort();
// percentage.reverse();

for (let i = 0; i < 5; i++) {
  let budget_allocate = budget * (percentage[i] / 100);

  console.log(
    `department = ${i + 1} percentage = ${
      percentage[i]
    } budget_Allocate = ${budget_allocate.toFixed(2)}`
  );

  // Deduct the allocated budget from the total budget
  budget -= budget_allocate;
}

console.log("Remaining budget:", budget.toFixed(2));
