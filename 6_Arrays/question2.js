let products = [
  { name: "milk", expdate: new Date(25, 1, 7), isInstock: true },
  { name: "cheese", expdate: new Date(25, 2, 7), isInstock: true },
  { name: "butter", expdate: new Date(25, 1, 26), isInstock: true },
];
let dt1 = new Date(25, 2, 7);
let expiredProducts = products.filter((dt) => dt.expdate < dt1);
console.log("ExpiredProducts: ", expiredProducts);
