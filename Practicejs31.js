// For loops are a common way to iterate over the elements of an array or the characters of a string. However, JavaScript also provides a for...in loop that can be used to iterate over the keys of an object. The for...in loop is useful for iterating over the properties of an object, such as the keys of a hash. Here's how you can use a for...in loop to iterate over the keys of the letterFrequencies hash:

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

function arrMath(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(arrMath([1, 3, 5, 7, 9]));

var array1 = ["Apple", "Berry", "Banana", "pear"];
var results1 = [];
console.log(array1[0][0]);
for (let i = 0; i < array1.length; i++) {
  if (array1[i][0] === array1[i][0].toUpperCase()) {
    results1.push(array1[i]);
  }
}
console.log(results1);

var hash = { name: "harry", house: "gryfendor" };
for (let key in hash) {
  key = "Patronus";
  hash[key] = "Stag";
}
console.log(hash);

var hash1 = { name: "harry", house: "gryfendor" };
for (let key in hash1) {
  if (key === "house") {
    hash1[key] = "Ravenclaw";
  }
}

console.log(hash1);
