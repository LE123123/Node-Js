const http = require('http')
const fs = require('fs').promises

http
  .createServer(async (req, res) => {
    try {
      // 비동기적 코드를 promise를 통해서 동기적으로 진행
      const data = await fs.readFile('./server2.html')
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(data)
    } catch (err) {
      console.error(err)
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end(err.message)
    }
  })
  .listen(8081, () => {
    console.log('8081번 포트에서 서버 대기중입니다.')
  })
