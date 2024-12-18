var numbers = [1, 2, 3];
var new_numbers = [];
var index = 0;
while (index < numbers.length) {
  new_numbers.push(numbers[index] * 3);
  index += 1;
}
console.log(new_numbers);

var numbers1 = [1, 2, 3];
const new_numbers1 = numbers.map((x) => x * 3);
console.log(new_numbers1);
