import dgram from "dgram";

const server = dgram.createSocket("udp4");

server.on("message", (message, remoteInfo) => {
  console.log(`Received message from ${remoteInfo.address}:${remoteInfo.port}`);
});

server.bind(8000, () => {
  console.log("UDP server is listening on port 8000");
});
