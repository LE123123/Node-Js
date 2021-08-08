const url = require('url')
const querystring = require('querystring')

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript')
console.log(parsedUrl)
console.log(parsedUrl.query)
const query = querystring.parse(parsedUrl.query)
console.log('querystring.parse():', query)
console.log('querystring.stringify():', querystring.stringify(query))
