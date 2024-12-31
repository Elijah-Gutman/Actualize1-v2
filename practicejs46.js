// function sort(number, range) {
//   if (range <= 100000) {
//     const sortedSubset = number.sort((a, b) => a - b);
//     const slicedSubset = sortedSubset.slice(0, range);
//     console.log(slicedSubset);
//   } else {
//     console.log("range exceeds limit");
//   }
//   return sort;
// }

// const number1 = [2, 4, 3, 5, 1];
// const range1 = 3;
// sort(number1, range1);

function evenSum(number) {
  var sum = 0;
  if (number) {
    for (var i in number) {
      if (number[i] % 2 === 0) {
        sum = sum + number[i];
      }
    }
    return sum;
  }
}
const number2 = [2, 4, 6];

console.log(evenSum(number2));

// Function to calculate the sum of even numbers
function evenSum1(numbers) {
  let sum = 0;
  for (let num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

// Reading input (DMOJ-style)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim(); // Read input from stdin
const numbers = input.split(" ").map(Number); // Convert space-separated input to an array of numbers

// Compute and print the result
console.log(evenSum1(numbers));
