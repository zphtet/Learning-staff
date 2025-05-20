import net from "node:net";

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(" Got from client =>", data.toString("utf-8"));
  });
  const res = Buffer.from(
    "2248454c4c4f2046524f4d20434c49454e54222248454c4c4f2046524f4d20434c49454e542032222248454c4c4f2046524f4d20434c49454e542033222248454c4c4f2046524f4d20434c49454e54203422",
    "hex",
  );

  console.log("Write to client");
  socket.write(res);
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(3005, "127.0.0.1", () => {
  console.log("Server is running on port 3005");
});
