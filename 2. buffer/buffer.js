const { Buffer } = require("node:buffer");

const buf = Buffer.alloc(3);
console.log(buf);
buf[0] = 0x4a;
buf[1] = 0x69;
buf[2] = 0x21;
console.log(buf);
// console.log(buf.toString("utf-8"));

// const buff = Buffer.from([0x48, 0x69, 0x21]);
// console.log(buff.toString("utf16le"));

// const buff1 = Buffer.from("E0AE85", "hex");
// console.log(buff1.toString("utf-8"));

// const buff2 = Buffer.from("Some random text!", "utf-8");
// console.log(buff2);

// console.log(Buffer.poolSize);
