// Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

var arr = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var arr1 = [];
var index1 = 0;

while (index1 < arr.length) {
  var index2 = 0;
  while (index2 < arr[index1].length) {
    arr1.push(arr[index1][index2]);
    index2 += 1;
  }
  index1 += 1;
  var arr2 = arr1.reduce((total, num) => total + num, 0);
}
console.log(arr2);
