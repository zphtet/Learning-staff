import net from "node:net";

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(" Got from client =>", data.toString());
  });
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(3005, "127.0.0.1", () => {
  console.log("Server is running on port 3005");
});
