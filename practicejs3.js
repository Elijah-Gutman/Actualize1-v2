var strings = ["helllo", "goodbye"];
var new_arr = [];
var index = 0;

while (index < strings.length) {
  new_arr.push(strings[index].toUpperCase());
  index += 1;
}
console.log(new_arr);

var strings2 = ["hello", "goodbye"];
new_strings2 = strings.map((x) => x.toUpperCase());
console.log(new_strings2);
