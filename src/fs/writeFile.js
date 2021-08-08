const fs = require('fs').promises

fs.writeFile('./src/fs/writeme.txt', '글이 입력됩니다.')
  .then(() => {
    return fs.readFile('./src/fs/writeme.txt')
  })
  .then((data) => {
    console.log(data.toString())
  })
  .catch((err) => {
    console.error(err)
  })
