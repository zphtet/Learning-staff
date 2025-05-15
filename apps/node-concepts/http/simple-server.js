import * as http from "node:http";

const server = http.createServer();

server.on("request", (req, res) => {
  // Method
  console.log("Method:", req.method);

  // URL
  console.log("URL:", req.url);

  // Headers
  console.log("Headers:", req.headers);

  // Body
  req.on("data", (chunk) => {
    console.log("Chunk:", chunk.toString("utf-8"));
  });

  req.on("end", () => {
    console.log("End");
  });

  res.write(JSON.stringify({ message: "Hello from server" }));
});

server.listen(8050, () => {
  console.log("Http server is running on port 8050");
});
