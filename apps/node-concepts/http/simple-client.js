import * as http from "node:http";

const client = new http.Agent({ keepAlive: true });

const request = http.request({
  agent: client,
  method: "POST",
  hostname: "localhost",
  port: 8050,
  path: "/create-user",
  headers: {
    "Content-Type": "application/json",
    // "Content-Length": 10,
  },
});

request.write(JSON.stringify("HELLO FROM CLIENT"));

request.write(JSON.stringify("HELLO FROM CLIENT 2"));
request.write(JSON.stringify("HELLO FROM CLIENT 3"));
request.write(JSON.stringify("HELLO FROM CLIENT 4"));

request.end();

request.on("response", (res) => {
  // Status Code
  console.log("Status Code:", res.statusCode);

  // Headers
  console.log("Headers:", res.headers);

  res.on("data", (chunk) => {
    console.log("Chunk:", chunk.toString("utf-8"));
  });

  res.on("end", () => {
    console.log("End");
  });
});
