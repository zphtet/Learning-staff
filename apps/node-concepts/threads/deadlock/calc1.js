const  { workerData, parentPort , threadId } = require("worker_threads")
const number = new Uint32Array(workerData.data)
const A = new Int32Array(workerData.A)
const B = new Int32Array(workerData.B)
console.log("Thread id", threadId)

function lock(seal){
    while(Atomics.compareExchange(seal,0 ,0,1)===1){
         Atomics.wait(seal ,0 ,1)
    }
}

function unlock(seal){
    Atomics.store(seal ,0 ,0)
    Atomics.notify(seal ,0 ,1)
}

lock(A)
unlock(A)
// lock(B)

console.log(`${threadId} locked A locked B`)

lock(B)
unlock(B)

// for(let i = 0; i < 5_000_000; i++){
//     // number[0] = number[0] + 1
//     // console.log("looping", i)
 
//     try{
//         lock(seal)
//     // Atomics.add(number, 0, 1)
//         number[0] = number[0] + 1
//         if(number[0] === 100){
//             console.log('this is the condition')
//             throw  new Error("err")
//         }
  
   

//     }catch(e){
//       console.log("error", e , number[0])

//     }finally{
//         unlock(seal)
//     }
//     // Atomics.store(seal ,0 ,0)
// }

// parentPort.postMessage(number)