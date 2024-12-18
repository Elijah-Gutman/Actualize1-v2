setTimeout(function () {
  console.log("First Task Done");
  setTimeout(function () {
    console.log("Second Task Done");
    setTimeout(function () {
      console.log("Third Task Done");
    }, 2000);
  }, 2000);
}, 2000);
