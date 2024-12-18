// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]]

const hash = { chair: 100, book: 14 };
Object.assign(hash, { book: 20, telephone: 200 });

const arr = Object.entries(hash);

console.log(arr);
