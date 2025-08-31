const  {spawn} = require('node:child_process')
const fs = require('node:fs')



const numberFormatter = spawn('./number_formatter',["./output.txt","$",','])


numberFormatter.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

numberFormatter.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`)
})


numberFormatter.on("close",(code)=>{
     if(code === 0){
        console.log("number formatter closed successfully")
     }else{
        console.error("number formatter closed with error", code)
     }
})


const fileStream = fs.createReadStream('input.txt')

fileStream.pipe(numberFormatter.stdin)