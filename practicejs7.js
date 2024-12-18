var pairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var pairs_hash = {};
var index = 0;
while (index < pairs.length) {
  var key = pairs[index][0];
  var value = pairs[index][1];
  pairs_hash[key] = value;
  index = index + 1;
}
console.log(pairs_hash);
