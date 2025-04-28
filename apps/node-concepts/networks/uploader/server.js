import net from "net";
import fs from "fs/promises";

let fileHandle;

let fileStream;

const server = net.createServer();

server.listen(3001, "127.0.0.1", () => {
  console.log("Server is running on port 3001");
});

server.on("connection", async (socket) => {
  console.log("Client connected");

  fileHandle = await fs.open("./storage/text.txt", "w");
  fileStream = fileHandle.createWriteStream();

  console.log("Server writableHighWaterMark", fileStream.writableHighWaterMark);

  let canWrite = true;
  socket.on("data", (data) => {
    canWrite = fileStream.write(data.toString("utf-8"));
    if (!canWrite) {
      socket.pause();
    }
  });

  fileStream.on("drain", () => {
    // console.log("Drained");
    socket.resume();
  });

  fileStream.on("finish", () => {
    console.log("File uploaded successfully");
    fileHandle.close();
  });

  socket.on("end", () => {
    console.log("Client disconnected");
    fileHandle = undefined;
    fileStream = undefined;
    // fileStream.end();
  });
});
