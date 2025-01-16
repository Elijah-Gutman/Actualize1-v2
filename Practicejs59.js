var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

var reverseString = function (s) {
  var string = "";
  var arr = [];
  for (var i in s) {
    arr.push(s[i]);
  }
  var reversedArr = arr.reverse();

  for (var j in reversedArr) {
    string += reversedArr[j];
  }
  return string;
};

console.log(reverseString("hello"));
