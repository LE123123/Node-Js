const fs = require('fs').promises
const constants = require('fs').constants

fs.access('./src/fs/remainfs/folder', constants.F_OK || constants.W_OK || constants.R_OK)
  .then(() => {
    return Promise.reject('이미 폴더 있음')
  })
  .catch((err) => {
    if (err.code === 'ENOENT') {
      console.log('폴더 없음')
      // 폴더가 없는 경우에는 만들어준다.
      return fs.mkdir('./src/fs/remainfs/folder')
    }
    return Promise.reject(err)
  })
  .then(() => {
    console.log('폴더 만들기 성공')
    return fs.open('./src/fs/remainfs/folder/file.js', 'w')
  })
  .then((fd) => {
    console.log('빈 파일 만들기 성공', fd)
    fs.rename('./src/fs/remainfs/folder/file.js', './src/fs/remainfs/folder/newfile.js')
  })
  .then(() => {
    console.log('이름 바꾸기 성공')
  })
  .catch((err) => {
    console.error(err)
  })
