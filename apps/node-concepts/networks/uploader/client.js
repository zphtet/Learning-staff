import net from "net";
import fs from "fs/promises";
const client = net.createConnection({
  host: "127.0.0.1",
  port: 3001,
});

client.on("connect", async () => {
  console.log("Connected to server");

  const fileHandle = await fs.open("./storage/read.txt", "r");
  const fileStream = fileHandle.createReadStream();

  fileStream.on("data", (data) => {
    client.write(data);
  });

  fileStream.on("end", () => {
    console.log("Successfully Uploaded");
    client.end();
  });
});

client.on("data", (data) => {
  console.log(data.toString());
});
