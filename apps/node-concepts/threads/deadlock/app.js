const { Worker } = require("worker_threads")


const  data = new Uint32Array(new SharedArrayBuffer(8))
const A = new Int32Array(new SharedArrayBuffer(4))
const B = new Int32Array(new SharedArrayBuffer(4))

const THREADS = 2;

let completed = 0;


const worker = new Worker("./calc1.js", { workerData: { data: data.buffer  , A: A.buffer , B: B.buffer } })
const worker2 = new Worker("./calc2.js", { workerData: { data: data.buffer  , A: A.buffer , B: B.buffer } })

// for(let i = 0; i < THREADS; i++){

//     const worker = new Worker("./calc.js", { workerData: { data: data.buffer  , A: A.buffer , B: B.buffer } })
     
//     worker.on('exit', (code)=>{
//          completed ++;
//         if(completed === THREADS){
            
//             console.log("all workers completed", data)
//             console.log("final number is", data[0])
//             process.exit(0)
//         }
//     })

   
// }

