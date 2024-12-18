// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

var hash = { chair: 100, book: 14 };

var newArray = Object.entries(hash);

console.log(newArray.flat());

var hash2 = { a: 1, b: 2, c: 3, d: 4 };
var flattenedArray = [];
Object.entries(hash2).forEach(function ([key, value]) {
  flattenedArray.push(key);
  flattenedArray.push(value);
});
console.log(flattenedArray);

// Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

function ifs() {
  var int = 15;

  if (int > 80) {
    console.log(5);
  } else if (int > 60 && int < 80) {
    console.log(4);
  } else if (int > 40 && int < 60) {
    console.log(3);
  } else if (int > 20 && int < 40) {
    console.log(2);
  } else {
    console.log(1);
  }
}
ifs();
