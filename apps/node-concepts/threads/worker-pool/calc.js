const { parentPort } = require('worker_threads')
const generatePrimes = require('./prime-generator.js')
const factorial = require('./factorial.js')
parentPort.on('message',(({taskName , options})=>{

    if(taskName === 'generatePrimes'){
        const {start, count, format, log} = options
        const primes = generatePrimes(count, start, {format, log})
        parentPort.postMessage(primes)
   }
   if(taskName === 'factorial'){
        const {n} = options
        const result = factorial(n)
        parentPort.postMessage(result)
   }
}))

