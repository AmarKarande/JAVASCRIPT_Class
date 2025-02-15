//Function

function sayHello() {
  console.log("Helloworld.");
}
sayHello();

//Method

const user = {
  name: "bixby",
  greet: function () {
    console.log("hello", this.name);
  },
};
user.greet();

//function Return.

function sqrt(num) {
  return num * num;
}
let res = sqrt(8);
console.log("res=", res);

//Name Function.

function namefun() {
  console.log("this is a name function.");
}
namefun();

//Anonymous Function.

const anonymous = function () {
  console.log("This is a anonymous function.");
};
anonymous();

//Arrow Function.
const addition = (a, b) => {
  return a + b;
};
const ans = addition(15, 15);
console.log("ans=", ans);

//Function Expression.
const multiply = function (x, y) {
  return x * y;
};
console.log("multiply=", multiply(4, 5));

//Arguments.
function args() {
  console.log("arguments passed are:", arguments);
}
args(1, 2, 3);
args(1, 2, 3, 4, 5);

//argument object.
function Sumof() {
  let total = 0;
  let arr = Object.values(arguments);
  arr.forEach((element) => {
    total += element;
  });
  return total;
}
console.log("Sumof", Sumof(1, 2));
console.log("Sumof", Sumof(1, 2, 3, 4, 5));

//Restparameter.
function multipleOf(...number) {
  total = 1;
  number.forEach((num) => {
    total *= num;
  });
  return total;
}
console.log("multipleOf", multipleOf(1, 2));
console.log("multipleOf", multipleOf(1, 2, 3, 4, 5));

//Immediately Invoked Function Expression (IIFE):

(function () {
  console.log("IIFE function");
})();

//Generator Function:
function* counter(stop) {
  let cnt = 1;
  while (cnt <= stop) {
    yield cnt;
    cnt++;
  }
}
const numbers = counter(10);
console.log("counter=", numbers.next());
console.log("counter=", numbers.next());
console.log("counter=", numbers.next());

//Async Functions:

async function fetchData() {
  const response = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
    body: null,
  });
  const data = await response.json();
  console.log("data=", data);
}
fetchData();
