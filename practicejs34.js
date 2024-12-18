var hash = {
  "Target price": "$15.05",
  "mixed fruit": "$2.15",
  "french fries": "$2.75",
  "side salad": "$3.35",
  "hot wings": "$3.55",
  "mozzarella sticks": "$4.20",
  "sampler plate": "$5.80",
};
var arr = Object.values(hash);
function convertToNum(str) {
  return parseFloat(str.replace("$", ""));
}
var numArr = arr.map(convertToNum);
console.log(numArr);
