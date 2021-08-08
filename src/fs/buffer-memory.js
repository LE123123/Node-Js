const fs = require('fs')

console.log('before: ', process.memoryUsage().rss)

const data1 = fs.readFileSync('./src/fs/big.txt')
fs.writeFileSync('./src/fs/big2.txt', data1)
console.log('buffer: ', process.memoryUsage().rss)
