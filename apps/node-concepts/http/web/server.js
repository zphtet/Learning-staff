import Apple from "./apple.js";

const app = new Apple();

app.route("GET", "/", (req, res) => {
  res.status(200).sendFile("./public/index.html", "text/html");
});

app.route("GET", "/style.css", (req, res) => {
  res.status(200).sendFile("./public/style.css", "text/css");
});

app.route("GET", "/app.js", (req, res) => {
  res.status(200).sendFile("./public/app.js", "text/javascript");
});

// app.route("GET", "/", (req, res) => {
//   res.status(200).sendFile("./public/style.css", "text/css");
// });

app.listen(4005, () => {
  console.log("My App is listening on port http://localhost:4005");
});
