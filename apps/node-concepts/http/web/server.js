import http from "node:http";
import fs from "node:fs/promises";
const server = http.createServer(async (req, res) => {
  console.log(req.url, req.method);
  //   res.end("Hello World");

  if (req.url === "/" && req.method === "GET") {
    const fileHandle = await fs.open("./public/index.html", "r");
    // const content = await fileHandle.readFile("utf-8");
    // res.end(content);
    const readStream = fileHandle.createReadStream();
    readStream.pipe(res);
  } else {
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
