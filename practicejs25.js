// Define the addTwoPromises function
var addTwoPromises = async function (promise1, promise2) {
  try {
    // Wait for both promises to resolve
    const [value1, value2] = await Promise.all([promise1, promise2]);
    // Return the sum of the resolved values
    return value1 + value2;
  } catch (error) {
    // Handle any rejected promises
    console.error("An error occurred:", error.message);
  }
};

// Test with predefined resolved promises
const testResolvedPromises = async () => {
  const promise1 = Promise.resolve(10); // Resolves to 10
  const promise2 = Promise.resolve(20); // Resolves to 20

  const result = await addTwoPromises(promise1, promise2);
  console.log("Test with resolved promises:", result); // Output: 30
};

// Test with one rejected promise
// const testRejectedPromise = async () => {
//   const promise1 = Promise.resolve(10); // Resolves to 10
//   const promise2 = Promise.reject(new Error("Failed to resolve")); // Rejects with an error

//   const result = await addTwoPromises(promise1, promise2);
//   console.log("Test with a rejected promise:", result); // Output: undefined (error logged to console)
// };

// Test with user input
// const testUserInput = async () => {
//   const userInput1 = prompt("Enter a number for the first promise:");
//   const userInput2 = prompt("Enter a number for the second promise:");

//   // Convert user inputs into resolved promises
//   const promise1 = Promise.resolve(Number(userInput1));
//   const promise2 = Promise.resolve(Number(userInput2));

//   const result = await addTwoPromises(promise1, promise2);
//   console.log(`The sum of ${userInput1} and ${userInput2} is:`, result);
// };

// Execute tests
(async () => {
  console.log("Running test with resolved promises...");
  await testResolvedPromises();

  // console.log("\nRunning test with a rejected promise...");
  // await testRejectedPromise();

  // console.log("\nRunning test with user input...");
  // await testUserInput();
})();
