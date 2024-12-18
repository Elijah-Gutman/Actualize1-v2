var original_hash = { a: 1, b: 2, c: 3 };
var flipped_hash = {};

Object.entries(original_hash).forEach(function ([key, value]) {
  flipped_hash[value] = key;
});

console.log(flipped_hash);
