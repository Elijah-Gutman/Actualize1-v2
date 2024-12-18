// var numbers = [5, 10, 8, 3, 9];
// var minimum = numbers.reduce(function (min, number) {
//   if (number < min) {
//     return number;
//   } else {
//     return min;
//   }
// }, numbers[0]);
// console.log(minimum);

// OR

var numbers = [5, 10, 8, 3, 9];
var minimum = numbers.reduce(function (min, number) {
  return number < min ? number : min;
});
console.log(minimum);
