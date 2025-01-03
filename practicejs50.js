// function sumOfMultiples(n, m) {
//   let sum = 0;

//   for (let i = m; i <= n; i += m) {
//     sum += i;
//   }

//   return sum;
// }

// const n = 10;
// const m = 3;
// console.log(sumOfMultiples(n, m));

function countVowels(word) {
  var word1 = word.toLowerCase();
  var count = 0;
  for (var i in word1) {
    if (word1[i] === "a" || word1[i] === "e" || word1[i] === "i" || word1[i] === "o" || word1[i] === "u") {
      count = count + 1;
    }
  }
  console.log(count);
  return countVowels;
}
const input = "hello world";
countVowels(input);

function countVowels1(word) {
  var word1 = word.toLowerCase();
  var count = 0;
  for (var char of word1) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }
  console.log(count);
  return count;
}

const input1 = "hello world";
countVowels1(input1);
