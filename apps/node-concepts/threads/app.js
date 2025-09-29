const { Worker  , MessageChannel} = require("worker_threads")


// console.log("this is main thread")

// new Worker('./thread.js', { workerData: { message: "Hello from main thread" } })



// for(let i =0 ;i<10 ;i++){
//       const worker = new Worker('./thread.js')
// }
 

// Communication between threads
// const { port1, port2 } = new MessageChannel();

// const thread1 = new Worker('./thread.js', { workerData: { port: port1 } , transferList: [port1] })
// const thread2 = new Worker('./thread.js', { workerData: { port: port2 } , transferList: [port2] })


// port1.postMessage({name : "John"})
// port2.postMessage({name : "Doe"})

// port2.on("message", (message) => {
//   console.log("message  received from port2:", message)
// })

// port1.on("message", (message) => {
//   console.log("message  received from port1:", message)
// })



// Communication betweeen main and child threads

// const  channel1 = new MessageChannel()
// const  channel2 = new MessageChannel()

// // console.log("channel1", channel1)

// const thread1 = new Worker('./thread.js', { workerData: { port: channel1.port1 } , transferList: [channel1.port1] })
// const thread2 = new Worker('./thread.js', { workerData: { port: channel2.port1 } , transferList: [channel2.port1] })

// channel1.port2.postMessage(" message from main thread to channel1")
// channel2.port2.postMessage(" message from main thread to channel2")

// channel1.port2.on("message", (message) => {
//   console.log("message  received from channel 1 on main thread:", message)
// })

// channel2.port2.on("message", (message) => {
//   console.log("message  received from channel 2 on main thread:", message)
// })

const thread = new Worker('./thread.js')

thread.on('message', (msg)=>{
     console.log("Message received on main thread:", msg)
})

thread.postMessage('Hello from main thread')