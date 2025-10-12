const  { workerData, parentPort , threadId } = require("worker_threads")
const number = new Uint32Array(workerData.data)
console.log("Thread id", threadId)

for(let i = 0; i < 5_000_000; i++){
    // number[0] = number[0] + 1
    // console.log("looping", i)
    Atomics.add(number, 0, 1)
}

// parentPort.postMessage(number)