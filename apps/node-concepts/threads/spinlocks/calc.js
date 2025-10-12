const  { workerData, parentPort , threadId } = require("worker_threads")
const number = new Uint32Array(workerData.data)
const seal  = new Int8Array(workerData.seal)
console.log("Thread id", threadId)

for(let i = 0; i < 5_000_000; i++){
    // number[0] = number[0] + 1
    // console.log("looping", i)
 while(Atomics.compareExchange(seal,0 ,0,1)===1){}
    // Atomics.add(number, 0, 1)
    number[0] = number[0] + 1

    Atomics.store(seal ,0 ,0)
}

// parentPort.postMessage(number)