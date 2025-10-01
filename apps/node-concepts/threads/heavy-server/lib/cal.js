const {workerData , parentPort} = require('worker_threads')
const generatePrimes = require('./prime-generator')


const {index, start, count} = workerData
console.log(`worker ${index} started`)

const result = generatePrimes(count, start , {format : true})
parentPort.postMessage(result)
parentPort.close()