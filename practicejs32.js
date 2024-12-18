const arr = [1, 2, 3, 4, 5, 3, 4, 1, 4];

const multiply = arr.reduceRight((prev, curr) => {
  return prev * curr;
});

console.log(multiply);

var arr3 = [];
const noRepeat = arr.reduce((prev, curr) => {
  if (prev === curr) {
    arr3.push(curr);
  }
});
console.log(noRepeat);
var arr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arr1.push(arr[i]);
  }
}
console.log(arr1);

const arr4 = [1, 2, 3, 4, 5, 3, 4, 1, 4];
var arr5 = [];
const noRepeat1 = arr4.reduce((seen, curr) => {
  if (seen.includes(curr) && !arr5.includes(curr)) {
    arr5.push(curr);
  }
  seen.push(curr);
  return seen;
}, []);

console.log(arr4); // Output: [3, 4, 1]
