
// console.log("this is the thread message")

// setInterval(()=>{
//       console.log("this is from thread setinterval")
// },2000)

const  { workerData , parentPort} = require("worker_threads")

// console.log("workerData :", workerData.message)

// const  port = workerData.port
const port = parentPort

port.on("message", (message) => {
  console.log("message received on thread:", message)
})

port.postMessage("mesage from worker thread")