

const fs = require('node:fs')

const {stdin , stdout , stderr , argv , exit} = require('node:process')

const filePath = argv[2]


if(filePath){
  const fileReadStream  = fs.createReadStream(filePath , 'utf-8')
  fileReadStream.pipe(stdout)
  fileReadStream.on('end',()=>{
    exit(0)
  })
}
stdin.pipe(stdout)