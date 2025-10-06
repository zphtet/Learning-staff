const {isMainThread, parentPort, workerData, Worker , threadId} = require('worker_threads')

let a = 100
if(isMainThread){
     const worker = new Worker('./isMainThread.js')
     a = 200
     console.log('This is the main thread',a , threadId)
}else{
    console.log('This is a worker thread',a, threadId)
}