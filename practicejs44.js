function fizzBuzz(...number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(number);
  }
  return fizzBuzz;
}

var num = 0;

while (num < 15) {
  num = num + 1;
  fizzBuzz(num);
}
