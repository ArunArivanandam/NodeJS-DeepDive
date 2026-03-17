// Async code/

// const fs = require("node:fs/promises");

// async function copyFileAsync() {
//   try {
//     await fs.copyFile("test.txt", "copty-test-async.txt");
//   } catch (error) {
//     console.log(error);
//   }
// }

// copyFileAsync();

//Callback Code

// const fs = require("node:fs");
// function copyFileCallback() {
//   fs.copyFile("test.txt", "copy-test-callback.txt", (error) => {
//     if (error) console.log(error);
//   });
// }

// copyFileCallback();

//Synchronous Code

const fs = require("node:fs");
function copyFileSync() {
  fs.copyFileSync("test.txt", "copy-test-sync.txt"); //blocking code
}

copyFileSync();
