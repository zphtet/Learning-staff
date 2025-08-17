

const {spawn , exec} = require('node:child_process')


const subprocess =  spawn('zsh' ,["./scripts.sh"])

subprocess.stdout.on('data',(data)=>{
  console.log(data.toString('utf-8'))
})

// | sort | uniq | wc -l

// exec("echo 'learn react by doing' | tr ' ' '\n' " , (error, stdout, stderr)=>{
//        if(error){
//            console.error(error);
//            return;
//        }
//        console.log(stdout)
// })
