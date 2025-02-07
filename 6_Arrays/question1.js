let ages = [12, 25, 2, 18, 66, 45, 39, 4, 67, 89, 32, 5];
let category = ages.map((age) => {
  if (age < 18) {
    return "Minor!";
  } else if (age >= 18) {
    return "Major!";
  }
});
console.log("Category = ", category);
