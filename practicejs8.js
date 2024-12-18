// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

var hash = { chair: 100, book: 14 };
var pairs = [];
Object.entries(hash).forEach(function ([name, price]) {
  pairs.push(name, price);
});
console.log(pairs);
