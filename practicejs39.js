const users = [
  { name: "Alice", active: false },
  { name: "Bob", active: false },
  { name: "Charlie", active: false },
];

users.forEach((user) => {
  user.active = true; // Activate all users
});

const cars = [
  { make: "honda", model: "accord" },
  { make: "toyota", model: "corolla" },
  { make: "ford", model: "mustang" },
];
cars.forEach((car) => {
  car.model = "whoCares";
});
console.log(users, cars);

const multipliers = {
  multiply(num) {
    console.log(num * 4);
  },
};

const nums = [1, 2, 3];
nums.forEach(multipliers.multiply, multipliers);

const hash = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.values(hash));

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

const hash1 = { a: 1, b: 2, c: 3, d: 4 };
console.log(Object.entries(hash1).flat());

var originalObject = { a: 1, b: 2, c: 3 };
var flippedObject = {};
Object.entries(originalObject).forEach(([key, value]) => {
  flippedObject[value] = key;
});
console.log(flippedObject);
