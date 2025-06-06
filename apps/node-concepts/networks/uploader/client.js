import net from "net";
import fs from "fs/promises";
import path from "path";
const client = net.createConnection({
  host: "127.0.0.1",
  port: 3001,
});

console.log("Client writableHighWaterMark", client.writableHighWaterMark);

const filePath = process.argv[2];
const fileName = path.basename(filePath);

console.log("fileName", fileName);

// return;

client.on("connect", async () => {
  console.log("Connected to server");

  const fileHandle = await fs.open(filePath, "r");
  const fileStream = fileHandle.createReadStream();

  const fileSize = (await fileHandle.stat()).size;
  let bytesWritten = 0;
  // fileStream.pause();
  client.write(`${fileName}`);
  // fileStream.resume();

  fileStream.on("data", (chunk) => {
    const canWrite = client.write(chunk);
    if (!canWrite) {
      fileStream.pause();
    }
    bytesWritten += chunk.length;
    const percentage = Math.round((bytesWritten / fileSize) * 100);
    // console.log(`Uploading... ${percentage}% done`);
    process.stdout.write(`\r${percentage}% done`);
  });

  client.on("drain", () => {
    // console.log("Drained");
    fileStream.resume();
  });

  fileStream.on("end", () => {
    console.log("Successfully Uploaded");
    client.end();
  });

  fileStream.on("error", (err) => {
    console.error("Error reading file:", err);
    client.end();
  });
});

client.on("data", (data) => {
  console.log(data.toString());
});

client.on("error", (err) => {
  console.error("Client error:", err);
});
