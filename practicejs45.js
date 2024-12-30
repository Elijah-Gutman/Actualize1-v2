function sort(number, range) {
  if (range <= 100000) {
    const sortedSubset = number.sort((a, b) => a - b);
    const slicedSubset = sortedSubset.slice(0, range);
    console.log(slicedSubset);
  } else {
    console.log("range exceeds limit");
  }
  return sort;
}

const number1 = [2, 4, 3, 5, 1];
const range1 = 3;
sort(number1, range1);
