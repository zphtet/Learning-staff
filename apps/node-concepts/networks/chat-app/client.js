import net from "node:net";

import readline from "readline/promises";

const client = net.createConnection({
  host: "127.0.0.1",
  port: 3005,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

const clearLine = (dir) => {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(dir, () => {
      resolve();
    });
  });
};

const moveCursor = (dx, dy) => {
  return new Promise((resolve, reject) => {
    process.stdout.moveCursor(dx, dy, () => {
      resolve();
    });
  });
};

const askQuestion = async () => {
  const message = await rl.question("Enter a message > ");

  // Move cursor up one line (dx=0, dy=-1)
  await moveCursor(0, -1);
  // Clear the current line to remove previous prompt
  await clearLine(0);
  // console.log();
  client.write(message);
};

client.on("connect", async () => {
  console.log("Connected to server");
  // await moveCursor(0, -1);
  // await clearLine(0);
  askQuestion();
});

client.on("data", async (data) => {
  console.log();
  await moveCursor(0, -1);
  // Clear the current line to remove previous prompt
  await clearLine(0);
  console.log(data.toString("utf-8"));
  askQuestion();
});

client.on("end", () => {
  console.log("End ::");
});
