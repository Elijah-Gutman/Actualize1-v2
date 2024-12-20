// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var nums = [1, 3, 5, 7];
var target = 2;
var searchInsert = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else {
      var before = nums[i] - 1;
      var after = nums[i] + 1;
      if (target > before || target < after) {
        return i;
      }
    }
  }

  console.log(i);
};

searchInsert(nums, target);

var chunk = function (arr, size) {
  var chunkedArray = [];

  for (var i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }

  return chunkedArray;
};
