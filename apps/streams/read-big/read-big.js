const fs = require("node:fs/promises");

// IIFE

async function readBigFun() {
  const fileHandler = await fs.open("text.txt", "r");
  const writeFileHandler = await fs.open("dest.txt", "w");

  const stream = fileHandler.createReadStream({ highWaterMark: 64 * 1024 });
  const writeStream = writeFileHandler.createWriteStream();
  console.log(stream.readableHighWaterMark);

  let i = 0;

  let split = "";
  console.time("Read Many ");

  stream.on("data", (chunk) => {
    // if (Number(chunk.toString()) % 2 === 0) {
    //   console.log("chunk ", chunk.toString());
    // }
    // console.log("chunk ", chunk.toString());

    // const chunkNumbers = chunk.toString("utf-8").split("  ");
    // const oddNumbers = chunkNumbers.filter((num) => {
    //   return Number(num) % 2 === 0;
    // });

    // const buffer = Buffer.from(oddNumbers.join("  "), "utf-8");

    const numbers = chunk.toString("utf-8").split("  ");

    if (Number(numbers[0]) !== Number(numbers[1]) - 1) {
      numbers[0] = split.trim() + numbers[0].trim();
    }

    if (
      Number(numbers[numbers.length - 2]) + 1 !==
      Number(numbers[numbers.length - 1])
    ) {
      split = numbers.pop();
    }

    numbers.forEach((num) => {
      let n = Number(num);
      if (n % 20 === 0) {
        if (!writeStream.write(Buffer.from(` ${n} `, "utf-8"))) {
          stream.pause();
        }
      }
    });

    i++;
  });

  stream.on("end", () => {
    console.log("total chunks", i);
    fileHandler.close();
    writeFileHandler.close();
    console.timeEnd("Read Many ");
  });
  writeStream.on("drain", () => {
    stream.resume();
  });
}

readBigFun();

