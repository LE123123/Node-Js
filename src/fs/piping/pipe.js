const fs = require('fs')

const readStream = fs.createReadStream('./src/fs/piping/readme4.txt')
const writeStream = fs.createWriteStream('./src/fs/piping/writeme3.txt')

readStream.pipe(writeStream)
