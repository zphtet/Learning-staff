// console.time("addition")
// const a = 4 + 4;

// console.timeEnd("addition")

// import fs from "node:fs/promises";

// // 13 s   77 % CUP    56 MB
// (async () => {
//   const fileHandler = await fs.open("text.txt", "w");
//   console.time("writeMany");
//   for (let i = 0; i < 1000000; i++) {
//     await fileHandler.write(` ${i} `);
//   }
//   console.timeEnd("writeMany");
// })();

// import fs from "node:fs";

// 1.8 s   77 % CUP    130 MB
// (async () => {
//   fs.open("text.txt", "w", (err, fd) => {
//     console.time("writeMany");
//     for (let i = 0; i < 1000000; i++) {
//       fs.writeSync(fd, ` ${i} `, () => {});
//     }
//     console.timeEnd("writeMany");
//   });
//   //   console.time("writeMany");
//   //   for (let i = 0; i < 1000000; i++) {
//   //     await fileHandler.write(` ${i} `);
//   //   }
//   //   console.timeEnd("writeMany");
// })();

const fs = require("node:fs/promises");

// (async () => {
//   const fileHandler = await fs.open("text.txt", "w");

//   const stream = fileHandler.createWriteStream();

//   console.log(stream.writableHighWaterMark);
//   console.log(stream.writableLength);
//   // const buff = Buffer.from("string");
//   // stream.write(buff);
//   // stream.write(buff);
//   // stream.write(buff);
//   // stream.write(buff);

//   const buff = Buffer.alloc(65536, "a");
//   const chunkState = stream.write(buff);
//   console.log("Chunk state", chunkState);

//   console.log("Writeable length", stream.writableLength);

//   stream.on("drain", () => {
//     console.log("Drained successfully  : Save to write buffer");
//     stream.write(Buffer.alloc(6550, "b"));
//     console.log("Writeable length", stream.writableLength);
//   });

//   // fileHandler.close();
// })();

(async () => {
  const fileHandler = await fs.open("text.txt", "w");

  const stream = fileHandler.createWriteStream();

  let i = 0;

  const count = 100000000;

  console.time("WriteMany");
  const writeMany = () => {
    let canWrite = true;
    while (i < count && canWrite) {
      const buff = Buffer.from(` ${i} `, "utf-8");

      canWrite = stream.write(buff);
      // console.log("Can write", canWrite);
      if (i === count - 1) {
        stream.end();

        console.log("End : Write all numbers");
        return;
      }
      i++;
    }

    // if (i < 1000000) {
    //   stream.once("drain", writeMany);
    // }

    // fileHandler.close();
  };

  writeMany();

  stream.on("drain", () => {
    writeMany();
  });

  stream.on("finish", () => {
    console.timeEnd("WriteMany");
    fileHandler.close();
  });

  // fileHandler.close();
})();
