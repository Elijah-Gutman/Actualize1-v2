// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function convertToHash(hash) {
  var array = Object.entries(hash);
  return array;
}

console.log(convertToHash({ chair: 100, book: 14 }));

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.
var word = "bookkeeper";
var letterFrequencies = {};
var index = 0;
while (index < word.length) {
  var letter = word[index];
  if (letterFrequencies[letter] === undefined) {
    letterFrequencies[letter] = 0;
  } else {
    letterFrequencies[letter] += 1;
    index += 1;
  }
}
console.log(letterFrequencies);
