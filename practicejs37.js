const testString = "(var x = {y: [1, 2, 3]})";
const stack = [];
const openBrackets = ["(", "{", "["];
const closeBrackets = [")", "}", "]"];
const matchingOpenBraces = { ")": "(", "}": "{", "]": "[" };

let index = 0;

while (index < testString.length) {
  const letter = testString[index];

  // Check for open brackets and push onto stack
  if (openBrackets.includes(letter)) {
    stack.push(letter);
  }

  // Check for close brackets and match with the stack
  if (closeBrackets.includes(letter)) {
    if (matchingOpenBraces[letter] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      console.log("Unbalanced brackets");
      break;
    }
  }

  index++;
}

// Check if stack is empty for final balance check
if (stack.length > 0) {
  console.log("Unbalanced brackets");
} else {
  console.log("Balanced brackets");
}

// Print Manager Class
class PrintManager {
  constructor() {
    this.queue = [];
  }

  // Add document to queue
  queuePrintJob(document) {
    this.queue.push(document);
  }

  // Process the print queue
  run() {
    while (this.queue.length > 0) {
      this.print(this.queue.shift()); // Remove and return the first element
    }
  }

  // Simulate the printing process
  print(document) {
    console.log(document);
  }
}

// Instantiate and use the PrintManager
const printManager = new PrintManager();
printManager.queuePrintJob("First Document");
printManager.queuePrintJob("Second Document");
printManager.queuePrintJob("Third Document");
printManager.run();
