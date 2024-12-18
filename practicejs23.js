// Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount amount based on the following conditions:

// If the total order value is less than $50, there is no discount.
// If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
// If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.

var OrderValue = 105;
var membership = "premium";

if (OrderValue < 50) {
  console.log("no discount");
}
if (OrderValue >= 50 && OrderValue <= 100) {
  if (membership === "regular") {
    console.log("5% Discount");
  } else if (membership === "premium") {
    console.log("10% dicount");
  }
}
if (OrderValue > 100) {
  if (membership === "regular") {
    console.log("10% discount");
  } else if (membership === "premium") {
    console.log("15% discount");
  }
}
