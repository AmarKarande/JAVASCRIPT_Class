let budget = 1000;
let departmetnt = 5;
let percentage = [20, 10, 30, 8, 2];
// percentage.sort();
// percentage.reverse();
for (let i = 0; i < 5; i++) {
  let budget_alocate = budget * (percentage[i] / 100);

  console.log(
    `department= ${i} percentage = ${percentage[i]} budget_Allowcate == ${budget_alocate}`
  );
  budget -= budget_alocate;
}
console.log("Remaining budget:", budget);
