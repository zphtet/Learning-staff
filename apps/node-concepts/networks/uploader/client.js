import net from "net";
import fs from "fs/promises";
const client = net.createConnection({
  host: "127.0.0.1",
  port: 3001,
});

console.log("Client writableHighWaterMark", client.writableHighWaterMark);

client.on("connect", async () => {
  console.log("Connected to server");

  const fileHandle = await fs.open("./storage/numbers.txt", "r");
  const fileStream = fileHandle.createReadStream();

  fileStream.on("data", (chunk) => {
    const canWrite = client.write(chunk);
    if (!canWrite) {
      fileStream.pause();
    }
  });

  client.on("drain", () => {
    console.log("Drained");
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
