// Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39

// nested loops with basic logic is easy, being able to do this with methods
// to me requires a little more skilled understanding of JS
const numbers = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const numbers1 = numbers.flat();
const sum = numbers1.reduce((acc, num) => acc + num);
console.log(sum);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].
// Shorter answer
var hash = { a: 1, b: 2, c: 3, d: 4 };

var hash1 = Object.entries(hash);
console.log(hash1.flat());

function addUp(words) {
  return words.filter((word) => word + word);
}

const addWord = addUp([[["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]]].flat(4));
console.log(addWord);
