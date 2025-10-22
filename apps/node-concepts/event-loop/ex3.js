

const {performance} = require('perf_hooks');

const count = 10_000_000_000;  

const loop = ()=>{
    for(let i = 0; i < count; i++){
        if(i % 1000000000 === 0){
            console.log(performance.eventLoopUtilization());
        }
    }
}
setImmediate(()=>{

    loop()
    console.log("callback done")
})

// loop()

// process.nextTick(loop)