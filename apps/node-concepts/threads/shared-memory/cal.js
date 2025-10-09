

const { workerData , threadId} = require("worker_threads")
const { Buffer} = require("node:buffer")

const data = Buffer.from(workerData.data)
console.log("this is the thread id", threadId ,data)
data[threadId -1] = 255