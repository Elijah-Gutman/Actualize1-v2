// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

// The simple answer is... \/\/\/\/
// var arr = [
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ];
// var arr1 = arr.flat();
// console.log(arr1);

// or...
var numberPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var flattenedNumbers = [];
var index1 = 0;
while (index1 < numberPairs.length) {
  var numberPair = numberPairs[index1];
  var index2 = 0;
  console.log(numberPair);
  while (index2 < numberPair.length) {
    var number = numberPair[index2];
    flattenedNumbers.push(number);
    index2 = index2 + 1;
  }
  index1 = index1 + 1;
}
console.log(flattenedNumbers);
