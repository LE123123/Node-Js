const fs = require('fs').promises
// console.log(fs)

fs.readFile('./src/fs/readme.txt')
  .then((data) => {
    console.log(data)
    console.log(data.toString())
  })
  .catch((err) => {
    console.error(err)
  })
