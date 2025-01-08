function sum(numbers) {
  const arr = [];
  const str = numbers.toString();
  var sum = 0;
  for (var i in str) {
    var digit = parseInt(str[i]);
    sum = sum + digit;
  }
  return sum;
}
console.log(sum(12345));
