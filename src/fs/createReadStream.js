const fs = require('fs')

const readStream = fs.createReadStream('./src/fs/readme3.txt', { highWaterMark: 16 }) // 16B씩
const data = []

readStream.on('data', (chunk) => {
  data.push(chunk)
  console.log('data : ', chunk, chunk.length)
})

readStream.on('end', () => {
  console.log('end: ', Buffer.concat(data).toString())
})

readStream.on('error', (err) => {
  console.log('error :', err)
})
