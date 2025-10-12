const { Worker } = require("worker_threads")


const  data = new Uint32Array(new SharedArrayBuffer(8))
const seal = new Int8Array(new SharedArrayBuffer(1))

const THREADS = 8;

let completed = 0;

for(let i = 0; i < THREADS; i++){

    const worker = new Worker("./calc.js", { workerData: { data: data.buffer  , seal: seal.buffer } })
     
    worker.on('exit', (code)=>{
         completed ++;
        if(completed === THREADS){
            
            console.log("all workers completed", data)
            console.log("final number is", data[0])
            process.exit(0)
        }
    })

   
}

