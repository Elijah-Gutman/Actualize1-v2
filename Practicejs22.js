// Use a nested loop to convert an array of string arrays into a single string.
// For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

var arr = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
var str = "";

var index1 = 0;

while (index1 < arr.length) {
  var index2 = 0;
  var smallArray = arr[index1];
  while (index2 < smallArray.length) {
    str = str + arr[index1][index2];
    index2++;
  }
  index1++;
}
console.log(str);
