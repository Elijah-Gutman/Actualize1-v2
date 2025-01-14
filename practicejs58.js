"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  const nums = inputString.trim().split(/\s+/).map(Number); // Parse piped input into an array of numbers
  const result = findMax(nums);
  process.stdout.write(result + "\n"); // Output the result to stdout
});

function findMax(nums) {
  let currentValue = -Infinity; // Use `let` for modern JS
  for (const num of nums) {
    if (num > currentValue) {
      currentValue = num;
    }
  }
  return currentValue;
}
