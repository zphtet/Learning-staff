#! usr/bin/env node
"use strict";
// console.log("hello I am console.log");
// process.stdout.write("Hello I am writing some nodes");

// console.log("args", process.argv.slice(2));

const path = require("path");
const fs = require("fs");
const { error } = require("console");
const getStdin = require("get-stdin");
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
  // console.log("filePath", filePath);
  // console.log("dir name", __dirname);
  // console.log("file name", __filename);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      error(err.message);
    } else {
      logWithUppercase(content.toString());
    }
  });
}

// when stdin
if (args.in) {
  process.stdout.write("Stdinput ");
  getStdin().then(logWithUppercase).catch(error);
}

function logWithUppercase(contents) {
  process.stdout.write(contents.toUpperCase());
}

function processFile(filePath) {
  // output buffer
  //   fs.readFileSync(filePath);
  //   output string
  //   const content = fs.readFileSync(filePath, "utf8");
  //   above two ways have different performace issues
  //   console.log("content", content);
  //   process.stdout.write(content);

  //    READ FILE ASYNC
  fs.readFile(filePath, (err, content) => {
    if (err) {
      error(err.message);
    } else {
      process.stdout.write(content.toString().toUpperCase());
    }
  });
}

// cmd
// cat hello.txt | node ex1.js --in
