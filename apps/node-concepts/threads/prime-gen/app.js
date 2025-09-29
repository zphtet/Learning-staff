
const { Worker } = require('worker_threads')
const {performance} = require('perf_hooks')



const THREADS  = 8; 
const STARTING_NUMBER = 100_000_000_000_000;
const PRIMES_TO_GENERATE = 240;
const startTime = performance.now()
const result = []
let finishedThreads = 0;
for(let i = 0; i < THREADS; i++){
    const worker = new Worker('./cal.js', { workerData: {index : i, startingNumber: STARTING_NUMBER + (i * PRIMES_TO_GENERATE *5), primesToGenerate: PRIMES_TO_GENERATE / THREADS} })
    worker.on('message', (msg)=>{
        result.push(...msg)
        finishedThreads++
        console.log(`worker ${i} finished`)
        if(finishedThreads === THREADS){
            console.log("all threads finished")
            console.log("prime numbers" ,result.sort())
            console.log("time taken" ,performance.now() - startTime)
        }
    })

    worker.on('error', (err)=>{
        console.error(`worker ${i} error`, err)
    })

    worker.on('exit', (code)=>{
        console.log(`worker ${i} exited with code ${code}`)
    })
}

// console.log( "prime numbers" ,result)
// console.log("time taken" ,performance.now() - startTime)


