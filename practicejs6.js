// Write a program that stores the weight of a package and the destination (domestic or international). Then calculate the shipping fee based on the following conditions:

// If the destination is domestic:
// If the weight is less than or equal to 1 kg, the shipping fee is $5.
// If the weight is greater than 1 kg, the shipping fee is $10.
// If the destination is an international shipment:
// If the weight is less than or equal to 1 kg, the shipping fee is $15.
// If the weight is greater than 1 kg, the shipping fee is $25.

var weight = 1.2;
var destination = "domestic";
var shipping_fee;
if (destination === "domestic") {
  if (weight <= 1) {
    shipping_fee = 5;
  } else if (weight > 1) shipping_fee = 10;
}

if (destination === "international") {
  if (weight <= 1) {
    shipping_fee = 15;
  } else if (weight > 1) shipping_fee = 25;
}
console.log(`$${shipping_fee}`);
