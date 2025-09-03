const cpeak = require("cpeak");

const server = new cpeak();

const port = 3000;

server.route("get", "/", (req, res) => {
  res.json({ message: "Hi there!" });
});

server.route("get", "/heavy", (req, res) => {
  for(let i = 0; i < 1000000000000; i++){
    // console.log("Heavy route");
  }
  res.json({ message: "Heavy route done" });
});

server.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});