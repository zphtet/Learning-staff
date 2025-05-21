import http from "node:http";
import fs from "node:fs/promises";
const server = http.createServer(async (req, res) => {
  console.log(req.url, req.method);
  //   res.end("Hello World");

  if (req.url === "/" && req.method === "GET") {
    const fileHandle = await fs.open("./public/index.html", "r");
    // const content = await fileHandle.readFile("utf-8");
    // res.end(content);
    res.setHeader("Content-Type", "text/html");
    const readStream = fileHandle.createReadStream();
    readStream.pipe(res);
  }

  if (req.url === "/style.css" && req.method === "GET") {
    const fileHandle = await fs.open("./public/style.css", "r");
    res.setHeader("Content-Type", "text/css");
    const readStream = fileHandle.createReadStream();
    readStream.pipe(res);
  }

  if (req.url === "/app.js" && req.method === "GET") {
    const fileHandle = await fs.open("./public/app.js", "r");
    res.setHeader("Content-Type", "text/javascript");
    const readStream = fileHandle.createReadStream();
    readStream.pipe(res);
  }
});

server.listen(5002, () => {
  console.log("Server is running on port 5002");
});
