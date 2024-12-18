function reduce() {
  const numbers = [2, 4, 4, 4, 10];
  const idea = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(idea);
}
reduce();

function findMaxValue() {
  const numbers = [10, 5, 8, 20, 3];

  const max = numbers.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
  });

  console.log(max);
}
findMaxValue();
