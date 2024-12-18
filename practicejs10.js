// Start with an array of numbers and compute product of all the numbers.
// For example, [5, 10, 8, 3] becomes 1200.

var numbers = [5, 10, 8, 3];

var index = 0;
var product = 1;
while (index < numbers.length) {
  product = product * numbers[index];
  index = index + 1;
}
console.log(product);
