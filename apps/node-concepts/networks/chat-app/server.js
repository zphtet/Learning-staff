import net from "node:net";

const server = net.createServer();

const clients = [];

server.on("connection", (socket) => {
  console.log(
    "New connection",
    socket.remoteAddress,
    socket.remotePort,
    socket.address(),
  );

  clients.push(socket);

  socket.on("data", (data) => {
    // console.log(data.toString("utf-8"));
    // socket.write(`Hello ${data.toString("utf-8")}`);

    clients.forEach((client) => {
      // if (client !== socket) {
      client.write(`${data.toString("utf-8")}`);
      // }
    });
  });
});

server.listen(3005, "127.0.0.1", () => {
  console.log("Server is running on port 3005");
});
