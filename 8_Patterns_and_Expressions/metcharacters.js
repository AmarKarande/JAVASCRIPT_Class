// .(dot): Matches any single char(except newline).
let regexp = /co.n.t/;
console.log(". = ", regexp.test("co.nt"));

// ^: Anchors the pattern to the start of the string.
regexp = /^count number/;
console.log("^ =", regexp.test("count number"));
console.log("^ =", regexp.test("number count"));

// $: Anchors the pattern to the end of the string

// []: Matches any one of the characters in the brackets.
regexp = /[%]/;
console.log("[] =", regexp.test("hell%p"));

// \d: Matches any digit (equivalent to [0-9])
let regex = /\d/;
console.log("\\d", regex.test("name1"));
console.log("\\d", regex.test("name@345"));

// \w: Matches any word character (letters, digits, or underscores).
let reg = /\w/;
console.log(reg.test("ak12_"));
console.log(reg.test("***#")); // need atleast one digit letter and underscores
console.log(reg.test("*_*#"));

// \s: Matches any whitespace character (spaces, tabs, line breaks).
reg = /\s/;
console.log(reg.test("my name is"));
console.log(reg.test("mynameis"));

// *: Matches 0 or more occurrences of the preceding element.
let reg3 = /ab*/;
console.log(reg3.test("banana"));

// +: Matches 1 or more occurrences of the preceding element.
regex = /#+/;
console.log("+", regex.test("#banana"));
console.log("+", regex.test("ban#"));
console.log("+", regex.test("bna"));

// ?: Matches 0 or 1 occurrence of the preceding element
regex = /a?r/;
console.log("?", regex.test("pr"));
console.log("?", regex.test("pacer"));

// Card Number	Card Type	Payment Status
// 5555 5537 5304 8194	MasterCard	APPROVED
// 5555 5555 5555 4444	MasterCard	APPROVED
// format one occurance or more of 5 5 5 4
regex = /^(5+\d{3})\s(5+\d{3})\s(5+\d{3})\s(\d{3}4$)/;
console.log(regex.test("5555 5537 5304 8194"));
