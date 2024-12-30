// 1. Reverse Words in a String
// Problem Statement:
// Write a function that takes a string of words separated by spaces and returns a new string with the words in reverse order.

function reverseWords(str) {
  const reversedString = str.split(" ").reverse().join(" ");

  return reversedString;
}

const originalString = "Hello World";
const reversedString = reverseWords(originalString);
console.log(reversedString);

const str = "The quick brown fox jumps over the lazy dog.";

const chars = str.split("");
for (var i in chars) {
  console.log(chars[i]);
}
