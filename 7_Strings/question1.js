let date = "2025-01-08";
console.log("Month=", date.slice(5, 7)); //op: month=01
console.log("Year=", date.slice(0, 5));
console.log("Day=", date.slice(8));

// Using split()
let date2 = "2024-12-04";
let [year, month, day] = date2.split("-");
console.log("Year = ", year, "Month =", month, "Day =", day);
