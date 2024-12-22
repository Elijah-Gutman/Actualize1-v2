const testString = "(var x = {y: [1, 2, 3]})";
const stack = [];
const openBrackets = ["(", "{", "["];
const closeBrackets = [")", "}", "]"];
const matchingOpenBraces = { ")": "(", "}": "{", "]": "[" };

let index = 0;

while (index < testString.length) {
  const letter = testString[index];

  if (openBrackets.includes(letter)) {
    stack.push(letter);
  }
  if (closeBrackets.includes(letter)) {
    if (matchingOpenBraces[letter] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      console.log("Unbalanced Brackets");
      break;
    }
  }
  index++;
}
if (stack.length > 0) {
  console.log("unbalanced brackets");
} else {
  console.log("Balanced brackets");
}
