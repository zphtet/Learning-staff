import net from "net";
import fs from "fs/promises";

const server = net.createServer();

server.listen(3001, "127.0.0.1", () => {
  console.log("Server is running on port 3001");
});

server.on("connection", async (socket) => {
  console.log("Client connected");

  let fileHandle = null;
  let fileStream = null;
  let isFirstChunk = true;
  let fileName = "";

  socket.on("data", async (data) => {
    const string = data.toString("utf-8");

    if (isFirstChunk) {
      fileName = string.trim();
      try {
        fileHandle = await fs.open("./storage/" + fileName, "w");
        fileStream = fileHandle.createWriteStream();

        // Set up drain event handler
        // The drain event is needed because when writing the first chunk of data,
        // if the internal buffer of the write stream becomes full (backpressure),
        // we need to pause receiving more data from the socket until the buffer
        // has been emptied. The drain event tells us when it's safe to resume.
        fileStream.on("drain", () => {
          // drain event occurs when internal buffer (16KB) is emptied after being full
          console.log("Stream drained (16KB buffer emptied), resuming socket");
          socket.resume();
        });

        console.log("Created Write Stream for file:", fileName);
      } catch (error) {
        console.error("Error creating file stream:", error);
        socket.end();
        return;
      }
      isFirstChunk = false;
    } else if (fileStream) {
      try {
        const canWrite = fileStream.write(data);
        if (!canWrite) {
          console.log("Backpressure detected, pausing socket");
          socket.pause();
        }
      } catch (error) {
        console.error("Error writing to file stream:", error);
        socket.end();
      }
    } else {
      console.log("File stream is not created yet");
    }
  });

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
  });
});
