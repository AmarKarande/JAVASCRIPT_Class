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
