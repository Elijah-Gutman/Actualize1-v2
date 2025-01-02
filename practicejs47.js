function sum(numbers) {
  const number1 = numbers.split(" ").map(Number);
  var sum1 = 0;

  for (var i in number1) {
    sum1 = sum1 + number1[i];
    console.log(sum1);
  }
  return sum;
}
const input = "3 4";
console.log(sum(input));

function oddSum(number) {
  var sum = 0;
  if (number) {
    for (var i in number) {
      if (number[i] === 1 || number[i] % 2 === 1) {
        sum = sum + number[i];
      }
    }
    return sum;
  }
}
const number2 = [2, 3, 4];

console.log(oddSum(number2));

function oddSum1(numbers) {
  let sum = 0;
  for (let num of numbers) {
    if (num % 2 === 1) {
      sum += num;
    }
  }
  return sum;
}

const fs = require("fs");
const input1 = fs.readFileSync("/dev/stdin", "utf8").trim();
const numbers = input1.split(" ").map(Number);

console.log(oddSum1(numbers));

function totalSum(numbers) {
  const number1 = numbers.split("").map(Number);
  var sum1 = 0;

  for (var i in number1) {
    sum1 = sum1 + number1[i];
  }
  console.log(sum1);
  return totalSum;
}
const input2 = "3458";
totalSum(input2);
