const zlib  = require('node:zlib')
const fs  = require('node:fs')
const {pipeline} = require('node:stream')



const readStream = fs.createReadStream('text.txt')
const writeStream = fs.createWriteStream('text-compressed.txt')

const gzip = zlib.createGzip()

pipeline(readStream, gzip, writeStream, (err) => {
  if (err) {
    console.error('Error compressing file', err)
  } else {
    console.log('File compressed successfully')
  }
})



