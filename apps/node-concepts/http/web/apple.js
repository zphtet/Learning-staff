import http from "node:http";
import fs from "node:fs/promises";

async function sendFile(filePath, type, res) {
  const fileHandle = await fs.open(filePath, "r");
  const fileStream = await fileHandle.createReadStream();
  res.setHeader("Content-Type", type);
  fileStream.pipe(res);
  //   fileHandle.close();
}

class Butter {
  constructor() {
    this.server = http.createServer();

    this.routes = {};

    this.server.on("request", (req, res) => {
      console.log("Request Come in", req.url, req.method);
      res.sendFile = (filePath, type) => sendFile(filePath, type, res);
      res.status = function (code) {
        res.statusCode = code;
        return this;
      };

      if (this.routes[req.method + req.url]) {
        this.routes[req.method + req.url](req, res);
      } else {
        res.status(404).sendFile("./public/404.html", "text/html");
      }

      // this.routes[req.method + req.url](req, res);
    });
  }

  route(method, path, cb) {
    this.routes[method + path] = cb;
  }

  listen(port, cb) {
    this.server.listen(port, () => {
      cb();
    });
  }
}

export default Butter;
