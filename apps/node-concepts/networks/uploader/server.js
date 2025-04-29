import net from "net";
import fs from "fs/promises";

const server = net.createServer();

server.listen(3001, "127.0.0.1", () => {
  console.log("Server is running on port 3001");
});

server.on("connection", async (socket) => {
  console.log("Client connected");

  // fileHandle = await fs.open("./storage/write.txt", "w");
  // fileStream = fileHandle.createWriteStream();

  let fileHandle;
  let fileStream;

  // console.log("Server writableHighWaterMark", fileStream.writableHighWaterMark);

  let canWrite = true;

  // let isFirst = false;
  let i = 0;
  socket.on("data", async (data) => {
    let string = data.toString("utf-8");
    let fileName = "";

    if (!fileHandle && i === 0) {
      const parts = string.split("##########");
      console.log("parts", parts);
      i++;
      if (parts.length >= 2) {
        fileName = parts[0];
        string = parts[1];
        try {
          fileHandle = await fs.open("./storage/" + fileName, "w");
          fileStream = fileHandle.createWriteStream();
          console.log("Created Write Stream");
        } catch (error) {
          console.error("Error creating file stream:", error);
          return;
        }
      } else {
        console.error("Invalid data format: missing file name separator");
        return;
      }
    }

    if (fileStream && string) {
      try {
        canWrite = fileStream.write(string);
        if (!canWrite) {
          socket.pause();
        }
      } catch (error) {
        console.error("Error writing to file stream:", error);
      }
    }
  });

  if (fileStream) {
    fileStream.on("drain", () => {
      // console.log("Drained");
      socket.resume();
    });

    fileStream.on("finish", () => {
      console.log("File uploaded successfully");
      fileHandle.close();
    });
  }

  socket.on("end", async () => {
    console.log("Client disconnected");
    if (fileStream) {
      fileStream.end();
    }
    if (fileHandle) {
      try {
        await fileHandle.close();
        console.log("File handle closed");
      } catch (error) {
        console.error("Error closing file handle:", error);
      }
    }
    fileHandle = undefined;
    fileStream = undefined;
    i = 0;
  });

  socket.on("error", async (error) => {
    console.error("Socket error:", error);
    if (fileStream) {
      fileStream.end();
    }
    if (fileHandle) {
      try {
        await fileHandle.close();
        console.log("File handle closed due to error");
      } catch (err) {
        console.error("Error closing file handle:", err);
      }
    }
    fileHandle = undefined;
    fileStream = undefined;
    i = 0;
  });
});
