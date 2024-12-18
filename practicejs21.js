// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.

var people = { 321: { name: "Alice", age: 31 }, 322: { name: "Maria", age: 27 } };
var peopleArray = [];
Object.entries(people).forEach(function ([id, person]) {
  person.id = parseInt(id);
  peopleArray.push(person);
});
console.log(peopleArray);

var JsonObj = { 3: 1, 2: 2, 1: 3 };
var Json1 = {};

Object.entries(JsonObj).forEach(function ([letter, number]) {
  Json1[number] = letter;
});
console.log(Json1);

const items = ["apple", "banana", "apple", "orange", "banana", "apple"];

const countMap = new Map();
items.forEach((item) => {
  countMap.set(item, (countMap.get(item) || 0) + 1);
});

console.log(countMap);

var DoArray = ["do", "or", "do", "not"];
const countMap1 = new Map();
DoArray.forEach((object) => {
  countMap1.set(object, (countMap1.get(object) || 0) + 1);
});
console.log(countMap1);
