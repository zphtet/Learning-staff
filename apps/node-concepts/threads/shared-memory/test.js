

const {Buffer} = require("node:buffer")

const buff1 = Buffer.from("hello this is the string")

// const buff2 = new Uint8Array(16)



// buff2[0] = 200
// // buff1[1] = 201
// buff1.buffer[0] = 21
// console.log(buff1.byteLength)
// console.log(buff2.byteLength)
// console.log(buff1.buffer)
// console.log(buff2)
// console.log("Poolsize of buff1", Buffer.poolSize)

// console.log(buff1)


// const buff3 = new Uint8Array(100)


// buff3[0] = -200
// const buff4 = Buffer.from(buff3)
// console.log(buff3.buffer)
// console.log(buff4.buffer)


const firstBuffer = Buffer.from("first string")
const secondBuffer = Buffer.from("second string")

const thirdBuffer = Buffer.concat([firstBuffer, secondBuffer])

thirdBuffer[0] = 200

console.log(thirdBuffer.toString('utf-8'))
console.log(thirdBuffer.buffer)