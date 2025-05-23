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
    this.server.on("request", (req, res) => {
      console.log("Request Come in", req.url, req.method);
    });
  }

  route(method, path, cb) {
    this.server.on("request", (req, res) => {
      if (method === "GET") {
        res.status = function (code) {
          res.statusCode === code;
          return this;
        };
        res.sendFile = (filePath, type) => sendFile(filePath, type, res);

        // if (
        //   req.url !== "/" &&
        //   (req.url.endsWith(".css") || req.url.endsWith(".js"))
        // ) {
        //   const filePath = `./public/${req.url.split("/")[1]}`;
        //   const type =
        //     (req.url.endsWith(".css") && "text/css") ||
        //     (req.url.endsWith(".js") && "text/javascript");
        //   sendFile(req.url.split(filePath), type, res);
        // }

        if (req.url === "/style.css") {
          console.log("Requesting css");
          sendFile("./public/style.css", "text/css", res);
        }

        if (req.url === "/app.js") {
          sendFile("./public/app.js", "text/javascript", res);
        }

        cb(req, res);
      }
    });
  }

  listen(port, cb) {
    this.server.listen(port, () => {
      cb();
    });
  }
}

export default Butter;
