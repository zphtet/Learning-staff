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

  socket.on("data", (data) => {
    fileStream.write(data.toString("utf-8"));
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});
