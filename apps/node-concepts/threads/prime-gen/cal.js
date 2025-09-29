const primeGenerator = require('./prime-generator.js')
const { workerData, parentPort } = require('worker_threads')


const {index, startingNumber, primesToGenerate} = workerData
console.log(`worker ${index} started`)
const result = primeGenerator(primesToGenerate, startingNumber)

parentPort.postMessage(result)