const fs = require('fs')

console.log('before: ', process.memoryUsage().rss)

const readStream = fs.createReadStream('./src/fs/big.txt')
const writeStream = fs.createWriteStream('./src/fs/big3.txt')

readStream.pipe(writeStream)
readStream.on('end', () => {
  console.log('stream: ', process.memoryUsage().rss)
})
