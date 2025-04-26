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

  const socketId = socket.remotePort.toString();

  clients.map((client) => {
    client.socket.write(`User ${socketId} Joined`);
  });

  clients.push({
    socket,
    id: socketId,
  });

  socket.write(`ID-${socketId}`);

  socket.on("data", (data) => {
    // console.log(data.toString("utf-8"));
    // socket.write(`Hello ${data.toString("utf-8")}`);

    const dataStringArr = data.toString("utf-8").split("-");
    const userId = dataStringArr[0];
    const mesage = dataStringArr[1];

    clients.forEach((client) => {
      // if (client !== socket) {
      client.socket.write(`> User : ${userId}   ${mesage}`);
      // }
    });
  });

  socket.on("end", () => {
    clients.map((client) => {
      client.socket.write(`User ${socketId} left `);
    });
  });
});

server.listen(3005, "127.0.0.1", () => {
  console.log("Server is running on port 3005");
});
