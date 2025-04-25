import net from "node:net";

const server = net.createServer();

server.on("connection", (socket) => {
  console.log(
    "New connection",
    socket.remoteAddress,
    socket.remotePort,
    socket.address(),
  );
});

server.listen(3005, "127.0.0.1", () => {
  console.log("Server is running on port 3005");
});
