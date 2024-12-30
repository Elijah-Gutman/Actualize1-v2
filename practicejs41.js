function hasUniqueCharters(str) {
  var previousCharacters = [];
  for (var i in str) {
    if (previousCharacters.includes(str[i])) {
      return false;
    }
    previousCharacters.push(str[i]);
  }
  return true;
}
console.log(hasUniqueCharters("abcdeff"));

function findpairs(nums, target) {
  var newarray = [];
  for (var i = 0; i < nums.length; i++) {
    var num1 = nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      var num2 = nums[j];
      if (num1 + num2 === target) {
        newarray.push([num1, num2]);
      }
    }
  }
  return newarray;
}
console.log(findpairs([1, 2, 3, 4, 6], 6));
