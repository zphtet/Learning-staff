import net from "node:net";

const client = net.createConnection({
  host: "127.0.0.1",
  port: 3005,
});

client.on("connect", () => {
  client.write("Hello from client");
});
