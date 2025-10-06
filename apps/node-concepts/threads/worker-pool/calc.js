const { parentPort } = require('worker_threads')
const generatePrimes = require('./prime-generator.js')

parentPort.on('message',(({taskName , options})=>{

    if(taskName === 'generatePrimes'){
        const {start, count, format, log} = options
        const primes = generatePrimes(count, start, {format, log})
        parentPort.postMessage(primes)
   }
    
}))

