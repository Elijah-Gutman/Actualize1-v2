function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);

  console.log("The original string is:", stringToSplit);
  console.log("The separator is:", separator);
  console.log("The array has", arrayOfStrings.length, "elements:", arrayOfStrings.join(" / "));
}

const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
splitString(monthString, space);
splitString(monthString);

const array = [1, 2, 3, 2, 4, 3, 5, 1];

var uniq = new Set(array);
console.log(uniq);

function uniq1(a) {
  return a.sort().filter((item, pos, a) => {
    return !pos || item !== a[pos - 1];
  });
}
console.log(uniq1(array));

// Problem Statement:
// Given a string containing only the characters ( and ), determine if the string is valid. A string is valid if:

// Open parentheses are closed in the correct order.
// Every closing parenthesis has a matching open parenthesis.

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
