const { Console } = require('console')
const http = require('http')

const server = http.createServer((req, res) => {
  // 여기에 어떻게 대응할지 적어주면 됩니다.
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  res.write('<h1>Hello Node!</h1>')
  res.end('<p>Hello Server!</p>')
})
//   .listen(8080, () => {
//     console.log('8080번 포트에서 서버 대기 중입니다.')
//   })

server.listen(8080)

server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기 중입니다!')
})

server.on('error', (error) => {
  console.error(error)
})
