import http from "node:http";
import fs from "node:fs/promises";

async function sendFile(filePath, type, res) {
  const fileHandle = await fs.open(filePath, "r");
  const fileStream = await fileHandle.createReadStream();
  res.setHeader("Content-Type", type);
  fileStream.pipe(res);
  //   fileHandle.close();
}

function json(data, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
  return res;
}

function parseCookies(cookieString) {
  if (!cookieString) return {};

  return cookieString.split(";").reduce((acc, cookie) => {
    const [key, ...val] = cookie.trim().split("=");
    acc[key] = val.join("=");
    return acc;
  }, {});
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

      res.json = (data) => json(data, res);

      // console.log("req", req);
      console.log(
        "req.headers.cookie",
        req.headers.cookie,
        typeof req.headers.cookie,
      );

      req.cookies = parseCookies(req.headers.cookie);

      if (req.method === "POST" || req.method === "PUT") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString("utf-8");
          console.log("Body", body);
        });
        req.on("end", () => {
          req.body = JSON.parse(body);

          console.log("Req.body", req.body);
          if (this.routes[req.method + req.url]) {
            this.routes[req.method + req.url](req, res);
          } else {
            res.status(404).sendFile("./public/404.html", "text/html");
          }
        });

        return;
      }

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
