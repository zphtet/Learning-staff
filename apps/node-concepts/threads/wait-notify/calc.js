const { workerData, parentPort } = require("worker_threads")



const flag = new Int32Array(workerData.flag)

let i = 0;

while (true){
      i++;
      if(i === 10000){
            Atomics.wait(flag, 0, 0)
      }
}