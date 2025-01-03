function sumOfMultiples(n, m) {
  let sum = 0;

  for (let i = m; i <= n; i += m) {
    sum += i;
  }

  return sum;
}

const n = 10;
const m = 3;
console.log(sumOfMultiples(n, m));
