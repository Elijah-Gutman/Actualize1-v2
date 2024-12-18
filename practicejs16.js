const makeCounter = () => {
  let count = 0;

  return () => {
    count++;
    console.log(count);
  };
};

let counter = makeCounter();
counter();
counter();
counter();

var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error("Not Equal");
      else return true;
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      else return true;
    },
  };
};

var createCounter = function (init) {
  let count = init;

  function increment() {
    return ++count;
  }
  function decrement() {
    return --count;
  }
  function reset() {
    return (count = init);
  }
  return { increment, decrement, reset };
};
