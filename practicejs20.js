// Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

var numbers = [2, 5, 3, 1, 0, 7, 11];
var result = false;
var index1 = 0;
while (index1 < numbers.length) {
  var currentNumber = numbers[index1];
  var index2 = 0;
  while (index2 < numbers.length) {
    if (index1 !== index2) {
      var otherNumber = numbers[index2];
      if (currentNumber + otherNumber === 10 && result === false) {
        result = [currentNumber, otherNumber];
      }
    }
    index2 += 1;
  }
  index1 += 1;
}
console.log(result);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

// var hash = { 321: { name: "Alice", age: 31 }, 322: { name: "Maria", age: 27 } };

// var hash2 = Object.entries(hash).flat().map[0](id => id.);

// var emptyHash = {};

var people = { 321: { name: "Alice", age: 31 }, 322: { name: "Maria", age: 27 } };
var peopleArray = [];
Object.entries(people).forEach(function ([id, person]) {
  person.id = parseInt(id);
  peopleArray.push(person);
});
console.log(peopleArray);
