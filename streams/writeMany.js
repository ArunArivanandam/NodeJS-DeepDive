// const fs = require("node:fs/promises");

// (async () => {
//   console.time("writeMany");
//   const fileHandle = await fs.open("test.txt", "w");

//   for (let i = 0; i < 1000000; i++) {
//     await fileHandle.write(`${i} `);
//   }
//   console.timeEnd("writeMany");
// })();

// const fs = require("node:fs");

// (() => {
//   console.time("writeMany");
//   fs.open("test.txt", "w", (err, fd) => {
//     for (let i = 0; i < 1000000; i++) {
//       const buff = Buffer.from(`${i} `, "utf-8");
//       fs.writeSync(fd, buff);
//     }
//     console.timeEnd("writeMany");
//   });
// })();

const fs = require("node:fs/promises");

(async () => {
  console.time("writeMany");
  const fileHandle = await fs.open("test.txt", "w");
  const stream = fileHandle.createWriteStream();

  for (let i = 0; i < 1000000; i++) {
    const buff = Buffer.from(`${i} `, "utf-8");
    stream.write(buff);
  }
  console.timeEnd("writeMany");
})();
