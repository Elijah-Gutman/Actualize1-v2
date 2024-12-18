// Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.

class Product {
  constructor(name, price, metadata) {
    this.title = name;
    this.price = price;
    this.metadata = metadata;
  }
}
const product = new Product("smartphone", 499.99, { brand: "apple", color: "Silver" });
console.log("Product Details:");
console.log(`Name: ${product.name}`);
console.log(`Price: $${product.price}`);
console.log(`Brand: ${product.metadata.brand}`);
console.log(`Color: ${product.metadata.color}`);

var day = 8;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    var text = "Not a Day of the weeks my man!";
    break;
  case 6:
    console.log("Shabbat");
}

console.log(text);

function isValidExpression(s) {
  const stack = [];
  const matchingPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    // If the character is an opening bracket, push it onto the stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    // If the character is a closing bracket
    else if (char === ")" || char === "}" || char === "]") {
      // Check if the stack is empty or the top of the stack doesn't match the closing bracket
      if (stack.length === 0 || stack.pop() !== matchingPairs[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0;
}
