// inorrect version

var filter = function (arr, fn) {
  var filteredArr = [];
  var i = 0;
  while (i < arr.length) {
    if ((fn(arr[i]), i)) {
      filteredArr.push(arr[i]);
    }
    i = i + 1;
  }
  return filteredArr;
};

// correctly evaluates for truthy statements

var filter1 = function (arr, fn) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
