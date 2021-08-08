const fs = require('fs')

fs.readFile('./src/fs/readme.txt', (err, data) => {
  if (err) {
    throw err
  }
  console.log(data)
  console.log(data.toString())
})
