let str = "This is a title!";

let result = str.toLowerCase().replace(" ", "_"); //replace only one space " " with _
console.log("Result = ", result);

result = str.toLowerCase().replaceAll(" ", "_"); //replace all  space " " with _
console.log("Result = ", result);
