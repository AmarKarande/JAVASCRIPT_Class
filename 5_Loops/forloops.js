// For of loops
// Syntax
//  for( element of fruits);
let fruits = ["Apple", "cherry", "Mango"];
for (f of fruits) {
  console.log(f);
}
fruits.forEach( (fruits) =>{
  console.log(fruits);
});
// For in loop
let object = {
  names: "Amar",
  id: 23,
};
// for (key in object) {
//   console.log(key, object[key]);
// }
for (value in object) {
  console.log(value, object[value]);
}

// For each loop
let str1 = "Microsoft";
str1.split("").forEach((c) => {
  console.log(c, "=>", "of microsoft");
});
