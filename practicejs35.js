async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  console.log("Start");
  await sleep(2000); // Wait for 2 seconds (2000 milliseconds)
  console.log("End after 2 seconds");
}
demo();

for (let i = 0; i < 10; i++) {
  console.log(i);
}
