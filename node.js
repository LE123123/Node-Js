const http = require('http')
const fs = require('fs')
const url = require('url')
const qs = require('querystring')

function templateHTML(title, list, body, control) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WEB1 - ${title}</title>
    </head>
    <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        ${body}
    </body>
    </html>
    `
}

function templateList(fileList) {
  let list = '<ul>'
  let i = 0
  while (i < fileList.length) {
    list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`
    i += 1
  }
  list += '</ul>'
  return list
}

http
  .createServer((req, res) => {
    const { url: _url } = req
    const { query: queryData } = url.parse(_url, true)
    const { pathname } = url.parse(_url, true)

    if (pathname === '/') {
      if (queryData.id === undefined) {
        // 만약 기본 경로가 /이고 queryData가 없다면 만들어 줘야지
        fs.readdir('./data', (err, fileList) => {
          const title = 'Welcome'
          const description = 'Hello, Node.js'
          const list = templateList(fileList)
          const template = templateHTML(title, list, `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`)
          res.writeHead(200)
          res.end(template)
        })
      } else {
        fs.readdir('./data', (err, fileList) => {
          /* eslint-disable */
          fs.readFile(`./data/${queryData.id}`, 'utf-8', (err, description) => {
            if (err) {
              /* eslint-disable */
              console.error(err)
            }
            const title = queryData.id
            const list = templateList(fileList)
            const template = templateHTML(
              title,
              list,
              `<h2>${title}</h2>${description}`,
              `<a href="/create">create</a> <a href="/update/?id=${title}">update</a> 
                <form action="/delete_process" method="post">
                    <input type="hidden" name="id" value="${title}">
                    <input type="submit" value="delete"> 
                </form>
              `
            )
            res.writeHead(200)
            res.end(template)
          })
        })
      }
    } else if (pathname === '/create') {
      fs.readdir('./data', (err, fileList) => {
        const title = 'WEB - create'
        const list = templateList(fileList)
        const template = templateHTML(
          title,
          list,
          `
          <form action="http://localhost:3000/create_process" method="post">
            <p>
              <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>`,
          ''
        )
        res.writeHead(200)
        res.end(template)
      })
    } else if (pathname === '/create_process') {
      const data = []
      let body = ''
      req.on('data', (chunk) => {
        data.push(chunk)
        // console.log(chunk)
        body += chunk
      })
      req.on('end', () => {
        // console.log('end :', Buffer.concat(data).toString())
        // querystring parsing process
        const post = qs.parse(body)
        const { title } = post.title
        const { description } = post
        fs.writeFile(`./data/${title}`, description, 'utf-8', (err) => {
          if (err) {
            /* eslint-disable */
            console.error(err)
          }
          res.writeHead(302, { Location: `/?id=${title}` })
          res.end()
        })
      })
    } else if (pathname === '/update/') {
      fs.readdir('./data', (error, filelist) => {
        fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
          const title = queryData.id
          const list = templateList(filelist)
          const template = templateHTML(
            title,
            list,
            `
              <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                <p>
                  <textarea name="description" placeholder="description">${description}</textarea>
                </p>
                <p>
                  <input type="submit">
                </p>
              </form>
              `,
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
          )
          res.writeHead(200)
          res.end(template)
        })
      })
    } else if (pathname === '/update_process') {
      let body = ''
      req.on('data', (chunk) => {
        body += chunk
      })
      req.on('end', () => {
        const post = qs.parse(body)
        const id = post.id
        const title = post.title
        const desc = post.description
        fs.rename(`./data/${id}`, `./data/${title}`, (err) => {
          fs.writeFile(`./data/${title}`, desc, 'utf-8', (err) => {
            res.writeHead(302, { Location: `/?id=${title}` })
            res.end()
          })
        })
      })
    } else if (pathname === '/delete_process') {
      let body = ''
      req.on('data', (chunk) => {
        body += chunk
      })
      req.on('end', () => {
        const post = qs.parse(body)
        const id = post.id
        fs.unlink(`./data/${id}`, (err) => {
          res.writeHead(302, { Location: `/` })
          res.end()
        })
      })
    } else {
      res.writeHead(404)
      res.end('Not found')
    }
  })
  .listen(3000, () => {
    console.log('3000번 포트에서 대기 중입니다.')
  })
