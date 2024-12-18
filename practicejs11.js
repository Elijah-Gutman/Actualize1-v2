// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

var str = "bookkeeper";
var bookArray = [];
var index = 0;

while (index < str.length) {
  bookArray.push(str[index]);
  index++;
}

const counts = bookArray.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(counts);

const counts1 = {};
bookArray.forEach((num) => {
  counts1[num] = (counts1[num] || 0) + 1;
});
console.log(counts1);

// var key;
// var value = {};
// var index1 = 0;

// while (index1 < bookArray) {
//   key = bookArray[index1];
//   value = bookArray[key];
//   index1++;
// }
// console.log(value);
