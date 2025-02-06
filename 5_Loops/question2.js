let giftbags = 100;
let giftcount = 0;
let participants = 7;

while (giftbags >= participants) {
  giftcount++; // Count the gift bags distributed
  giftbags = giftbags - participants; // Reduce the remaining gift bags
  console.log("Remaining gift bags:", giftbags); // Output remaining gift bags
}

console.log("Total gift bags distributed:", giftcount);
