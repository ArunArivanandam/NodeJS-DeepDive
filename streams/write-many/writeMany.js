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

  // console.log(stream.writableHighWaterMark);

  // const buff = Buffer.alloc(16383, "a");
  // console.log(stream.write(buff));
  // console.log(stream.write(Buffer.alloc(1, "a")));

  // stream.on("drain", () => {
  //   console.log(stream.write(Buffer.alloc(1, "a")));
  //   console.log(stream.writableLength);

  //   console.log("We are now safe to write more!");
  // });
  // setInterval(() => {}, 1000);
  // for (let i = 0; i < 1000000; i++) {
  //   const buff = Buffer.from(`${i} `, "utf-8");
  //   const isStreamEmpty = stream.write(buff);
  //   if (!isStreamEmpty) {
  //     break;
  //     stream.on("drain", () => {});
  //   }
  //   continue;
  // }

  let i = 0;

  const writeMany = () => {
    while (i < 1000000) {
      const buff = Buffer.from(`${i} `, "utf-8");
      if (i === 999999) {
        return stream.end(buff);
      }
      if (!stream.write(buff)) break;
      i++;
    }
  };

  writeMany();

  stream.on("drain", () => {
    console.log("Drained!!");
    writeMany();
  });

  stream.on("finish", () => {
    console.timeEnd("writeMany");
    fileHandle.close();
  });
})();
