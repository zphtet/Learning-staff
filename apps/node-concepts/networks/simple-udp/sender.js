import dgram from "dgram";

const client = dgram.createSocket({
  type: "udp4",
  // Increase buffer size to handle larger messages
  sendBufferSize: 65507, // Maximum safe UDP datagram size
});

client.send("Hello, UDP!", 8000, "localhost", (err, bytes) => {
  if (err) throw err;
  console.log(`Bytes : ${bytes}`);
});
