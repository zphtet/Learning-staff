#! usr/bin/env node
"use strict";

// Stream chunks by chunks

const path = require("path");
const fs = require("fs");
const { error } = require("console");
const getStdin = require("get-stdin");
const Transform = require("stream").Transform;
// require("dotenv").config();
const args = require("minimist")(process.argv.slice(2), {
  boolean: ["watch", "in"],
  string: "foo",
  string: "file",
});
console.log("args", args);

if (args.watch) {
  console.log("You are running in watch mode");
}

if (args.file) {
  const filePath = path.resolve(args.file);
  const stream = fs.createReadStream(filePath);
  processStream(stream);
}

// when stdin
if (args.in) {
  // process.stdout.write("Stdinput ");
  // getStdin().then(logWithUppercase).catch(error);
  processStream(process.stdin);
}

function processStream(inStream) {
  let inputStream = inStream;
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase());
      setTimeout(callback, 1000);
      // callback();
    },
  });

  inputStream = inputStream.pipe(transformStream);
  const outputStream = process.stdout;
  inputStream.pipe(outputStream);
}
