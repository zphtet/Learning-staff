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

import fs from "node:fs";

// 1.8 s   77 % CUP    130 MB
(async () => {
  fs.open("text.txt", "w", (err, fd) => {
    console.time("writeMany");
    for (let i = 0; i < 1000000; i++) {
      fs.write(fd, ` ${i} `, () => {});
    }
    console.timeEnd("writeMany");
  });
  //   console.time("writeMany");
  //   for (let i = 0; i < 1000000; i++) {
  //     await fileHandler.write(` ${i} `);
  //   }
  //   console.timeEnd("writeMany");
})();
