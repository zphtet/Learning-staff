// encryption/decryption -> crypto
// hashing / salting -> crypto
// compression -> zlib
// encoding / decoding -> Buffer text-encoding/decode
// stream -> streams
// http requests -> http
// file system -> fs
// crypto -> crypto

import { Transform } from "node:stream";
import fs from "node:fs/promises";

class Decrypt extends Transform {
  constructor(options) {
    super(options);
    this.totalBytes = 0;
    this.processedBytes = 0;
  }

  _transform(chunk, encoding, callback) {
    this.processedBytes += chunk.length;
    const progress = Math.floor((this.processedBytes / this.totalBytes) * 100);
    process.stdout.write(`\Decryption progress: ${progress}%`);

    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] !== 255) {
        chunk[i] = chunk[i] - 1;
      }
    }
    callback(null, chunk);
  }
}

(async () => {
  const readFile = await fs.open("encrypt.txt", "r");
  const writeFile = await fs.open("decrypt.txt", "w");
  const readStream = readFile.createReadStream();
  const writeStream = writeFile.createWriteStream();
  const encrypt = new Decrypt();

  // Get the total file size
  const stats = await fs.stat("read.txt");
  encrypt.totalBytes = stats.size;

  readStream.pipe(encrypt).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("\nDecryption completed!");
  });
})();
