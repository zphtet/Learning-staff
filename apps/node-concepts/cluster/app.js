
const cluster = require('node:cluster')




if(cluster.isPrimary){
    console.log("running primary process")
    console.log("main process id", process.pid)
    const allCores = require('node:os').availableParallelism()
    for(let i = 0; i < allCores; i++){
        const worker =   cluster.fork()
        console.log(`worker ${worker.process.pid} started`)
    }
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died ${code}`)
      const newWorker =  cluster.fork()
      console.log(`NEW worker ${newWorker.process.pid} started`)
    })

   
    for (const worker of Object.values(cluster.workers)) {
      worker.send('big announcement to all workers');
      worker.on('message',(data)=>{
        console.log(`worker ${worker.process.pid} received message`, data.toString('utf-8'))
      })
    }
}else{
      // console.log("running worker process")
      // process.on('message',(data)=>{
      //     console.log(`cluster process : ${process.pid}`, data.toString('utf-8'))
      // })

      // process.send("HELLO TO PRIMARY")
      require('./server.js')
}