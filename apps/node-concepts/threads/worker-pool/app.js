

const Pool = require('./pool')
const {performance} = require('perf_hooks')

const NUMBEROFTHREADS = 4;
const pool = new Pool(NUMBEROFTHREADS)

const startTime = performance.now()

const TotalTasks = 2_000_0
let completedTasks = 0
let totalResult = []
let batchSize = 1000
let batchIndex = 0;

function submitBatchTasks(startIdx , endIdx){
   let batchTaskCount = 0;

   for(let i = startIdx ; i < endIdx; i++){
    batchTaskCount++
    pool.submit('generatePrimes', {start : 10_000_000_000 + (i * 500),count : 20 , format : true , log : false},(result)=>{
        completedTasks++
        batchTaskCount--
        totalResult.push(...result)

        // whe all task are done
        if(completedTasks === TotalTasks){
            console.log("all tasks completed" , totalResult.sort())
            console.log("time taken", performance.now() - startTime)
            process.exit(0)
        }
        if(batchTaskCount === 0 ){
             batchIndex++
             console.log('submitting next batch')
             submitNextBatchTasks()
        }
    })
}
} 

function submitNextBatchTasks(){

    if( batchIndex * batchSize < TotalTasks){
         const start = batchIndex * batchSize
         const end = Math.min(start + batchSize, TotalTasks)
        submitBatchTasks(start , end)
    }
}

submitNextBatchTasks()

// for(let i = 0; i < TotalTasks; i++){
//     pool.submit('generatePrimes', {start : 10_000_000_000 + (i * 500),count : 20 , format : true , log : false},(result)=>{
//         // console.log("primes generated", result)
//         // console.log("time taken", performance.now() - startTime)
//         completedTasks++
//         totalResult.push(...result)
//         // console.log(performance.eventLoopUtilization())
//         // totalResult = totalResult.concat(result)
//         if(completedTasks === TotalTasks){
//             console.log("all tasks completed" , totalResult.sort())
//             console.log("time taken", performance.now() - startTime)
//             process.exit(0)
//         }
//     })
// }


// function submitBatchTasks(startIdx , size){
//   if(startIdx + size > TotalTasks){
//     console.log("all tasks completed" ,completedTasks, totalResult.sort())
//     console.log("time taken", performance.now() - startTime)
//     process.exit(0)
//   }

//   let i =0 ;
//   const completedBatchTasks = 0;
//   while( i < size){
//     pool.submit('generatePrimes', {start : 10_000_000_000 + (i * 500),count : 20 , format : true , log : false},(result)=>{
//         completedTasks++
//         completedBatchTasks++
//         totalResult.push(...result)
//         if(completedBatchTasks === batchSize){
//             submitBatchTasks(completedTasks , batchSize)
//         }
//     })
//   }
        
// }


// submitBatchTasks(0 , batchSize)