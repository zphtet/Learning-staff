import fs from "node:fs/promises";
import { pipeline } from "node:stream";

// file size 1GB , time : 900ms  : space : 1GB
// (async () => {
//   console.time("copy");
//   const destFile = await fs.open("dest.txt", "w");
//   const srcFileResult = await fs.readFile("text.txt");

//   await destFile.write(srcFileResult);
//   console.timeEnd("copy");
// })();

// (async () => {
//   console.time("copy");

//   const srcFile = await fs.open("text.txt", "r");
//   const destFile = await fs.open("text-copy.txt", "w");

//   //   console.log(await srcFile.read());
//   //   console.log(await srcFile.read());

//   let bytesRead = -1;

//   while (bytesRead !== 0) {
//     const readResult = await srcFile.read();
//     bytesRead = readResult.bytesRead;

//     if (bytesRead !== 16384) {
//       const indexOfNotFilled = readResult.buffer.indexOf(0);
//       await destFile.write(readResult.buffer.slice(0, indexOfNotFilled));
//     } else {
//       destFile.write(readResult.buffer);
//     }
//   }

//   console.timeEnd("copy");
//   await srcFile.close();
//   await destFile.close();
// })();

// file 1GB , time : 650ms

// (async () => {
//   console.time("copy");

//   const srcFile = await fs.open("text.txt", "r");
//   const destFile = await fs.open("text-copy.txt", "w");

//   //   console.log(await srcFile.read());
//   //   console.log(await srcFile.read());

//   const readStream = srcFile.createReadStream();
//   const writeStream = destFile.createWriteStream();

//   readStream.pipe(writeStream);

//   readStream.on("end", () => {
//     console.timeEnd("copy");
//   });

//   // console.timeEnd("copy");
// })();


// good for error handling and cleaning up , use in production
(async () => {
  console.time("copy");

  const srcFile = await fs.open("text.txt", "r");
  const destFile = await fs.open("text-copy.txt", "w");

  //   console.log(await srcFile.read());
  //   console.log(await srcFile.read());

  const readStream = srcFile.createReadStream();
  const writeStream = destFile.createWriteStream();

  pipeline(readStream, writeStream, (err) => {
    if (err) {
      console.error("error in pipeline", err);
    } else {
      console.log("Copy DONE");
    }

    console.timeEnd("copy");
  });
})();
