const fs = require('fs').promises

fs.readdir('./src/fs/remainfs/folder')
  .then((dir) => {
    console.log('폴더 내용 확인', dir)
    return fs.unlink('./src/fs/remainfs/folder/newFile.js')
  })
  .then(() => {
    console.log('파일 삭제 성공')
    return fs.rmdir('./src/fs/remainfs/folder')
  })
  .then(() => {
    console.log('폴더 삭제 성공')
  })
  .catch((err) => {
    console.error(err)
    if (err.code === 'ENOENT') {
      console.log('폴더 없음')
      return fs.mkdir('./src/fs/remainfs/folder')
    }
    return Promise.reject(err)
  })
  .catch((err) => {
    console.error(err)
  })
