// Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

var array = [2, 8, 3];
var array1 = [];
var index1 = 0;

while (index1 < array.length) {
  var index2 = 0;
  while (index2 < array.length) {
    array1.push(array[index1] * array[index2]);
    index2 += 1;
  }
  index1 += 1;
}
console.log(array1);
