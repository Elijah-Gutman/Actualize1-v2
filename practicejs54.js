// const wrongMap = new Map();
// wrongMap["bla"] = "blaa";
// wrongMap["bla2"] = "blaaa2";

// console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

// var pricehash = { chair: 75, book: 15 };
// var valueArray = [
//   { name: "chair", color: "red", weight: 10 },
//   { name: "book", color: "black", weight: 1 },
// ];

// var finalHash = {};
// var index = 0;
// while( index < )

var priceObject = { chair: 75, book: 15 };
var items = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
var combinedObject = {};
var index = 0;
while (index < items.length) {
  var item = items[index];
  var name = item.name;
  var color = item.color;
  var weight = item.weight;
  var price = priceObject[name];
  combinedObject[name] = { price: price, color: color, weight: weight };
  index += 1;
}
console.log(combinedObject);

// var arrayedHash = Object.entries(pricehash).flat();
// console.log(arrayedHash);

// var finalHash = { price: "emptyValue" };
// var index = 0;
// while (index < arrayedHash.length) {
//   for (var i in valueArray) {
//     var extractedValues = Object.entries(valueArray[i]);
//     console.log(extractedValues);
//     var flattnedValues = extractedValues.flat();
//     console.log(flattnedValues);
//     for (var j in flattnedValues) {
//       var key1 = arrayedHash[index + 1];
//       var key2 = arrayedHash[index + 3];
//       finalHash[price].push;
//       console.log(finalHash);
//     }
//   }
// }
