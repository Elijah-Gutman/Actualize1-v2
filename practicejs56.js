const testString = "(var x = {y: [1, 2, 3]})";
const stack = [];
const openBrackets = ["(", "{", "["];
const closeBrackets = [")", "}", "]"];
const matchingOpenBraces = { ")": "(", "}": "{", "]": "[" };

let index = 0;

while (index < testString.length) {
  const letter = testString[index];

  // Check for open brackets and push onto stack
  if (openBrackets.includes(letter)) {
    stack.push(letter);
  }

  // Check for close brackets and match with the stack
  if (closeBrackets.includes(letter)) {
    if (matchingOpenBraces[letter] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      console.log("Unbalanced brackets");
      break;
    }
  }

  index++;
}

function findMax(nums) {
  var currentValue = -Infinity;
  for (var i in nums) {
    if (nums[i] > currentValue) {
      currentValue = nums[i];
    }
  }
  return currentValue;
}

var result = [1, 2, 4, 1, 2, 9, 4];
console.log(findMax(result));
