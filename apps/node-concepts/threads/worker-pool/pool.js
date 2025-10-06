const  { Worker} = require('worker_threads')

const path = require('path')
class Pool{
    constructor(threadCount){
        this.threadCount = threadCount
        this.threads = []
        this.scheduledTasks = []
        this.idleThreads = []

        for(let i = 0; i < threadCount; i++){
             this.spawnThread()
        }
    }

    spawnThread(){
         const worker = new Worker(path.join(__dirname, 'calc.js'))

         worker.on('message',(result)=>{
            //   console.log("message received from worker", result)
              const {callback} = worker.currentTask
              if(callback){
                  callback(result)
              }
              this.idleThreads.push(worker)
              this.runNextTask()
         })
        this.threads.push(worker)
        this.idleThreads.push(worker)
    }

    submit(taskName,options, callback){
          this.scheduledTasks.push({taskName, options , callback})
          this.runNextTask()
    }
    runNextTask(){
         if(this.scheduledTasks.length >0 && this.idleThreads.length >0){
               const worker = this.idleThreads.shift()
               const {taskName, options , callback} = this.scheduledTasks.shift();
               worker.currentTask = {taskName, options , callback}
               worker.postMessage({taskName, options})
               
         }
    }
}


module.exports = Pool