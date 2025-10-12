
const  { Worker} = require("worker_threads")
const { Buffer} = require("node:buffer")



// const data = Buffer.from(new SharedArrayBuffer(8))
const data = new Uint8Array(new SharedArrayBuffer(8))

const THREADS = 8;

console.log("the data", data)
for(let i = 0; i < THREADS; i++){
    const worker = new Worker("./cal.js", { workerData: { data: data?.buffer } })
}

setTimeout(()=>{
    console.log("this is the data after 1 second", data)
}, 1000)