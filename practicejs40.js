var cancellable = function (fn, args, t) {
  const timer = setTimeout(() => fn(...args), t);
  return () => clearTimeout(timer);
};

var isEmpty = function (obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((sum, num) => sum + num, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.join(",")}]`;
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,1,4;2

var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};

var word = "bookkeeper";
var letterFrequencies = {};

for (var x of word) {
  if (letterFrequencies[x] === undefined) {
    letterFrequencies[x] = 0;
  }
  letterFrequencies[x] += 1;
}
console.log(letterFrequencies);

var someStr = 'He said "Hello, my name is Foo"';
console.log(someStr.replace(/['"]+/g, ""));

/// OR

var word1 = "bookkeeper";
var letterFrequencies1 = {};

for (var i in word1) {
  // 'i' is the index
  var letter = word1[i];
  if (letterFrequencies1[letter] === undefined) {
    letterFrequencies1[letter] = 0;
  }
  letterFrequencies1[letter] += 1;
}
console.log(letterFrequencies);

var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return functions.reduceRight(function (prevFn, nextFn) {
    return function (x) {
      return nextFn(prevFn(x));
    };
  });
};
