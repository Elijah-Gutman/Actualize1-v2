const arr = [1, 2, 3, 4, 5, 3, 4, 1, 4];
var arr1 = [];
const Repeat = arr.reduce((seen, curr) => {
  if (seen.includes(curr) && !arr1.includes(curr)) {
    arr1.push(curr);
  }
  seen.push(curr);
  return seen;
}, []);

console.log(arr1); // Output: [3, 4, 1]

var arr2 = [];

const noRepeat = arr.reduce((prev, curr) => {
  if (!prev.includes(curr)) {
    prev.push(curr);
    arr2.push(curr);
  }
  return prev;
}, []);

console.log(arr2);

const uniqarr = [...new Set(arr)];
console.log(uniqarr);
