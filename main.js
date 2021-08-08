// // const someString = 'Hello'
// // const result = Math.log(someString)
// // console.log(result)

// const people = [
//   {
//     age: 20,
//     city: '서울',
//     pet: ['cat', 'dog'],
//   },
//   {
//     age: 40,
//     city: '부산',
//   },
//   {
//     age: 31,
//     city: '대구',
//     pet: ['cat', 'dog'],
//   },
//   {
//     age: 36,
//     city: '서울',
//   },
//   {
//     age: 27,
//     city: '부산',
//     pet: 'cat',
//   },
//   {
//     age: 24,
//     city: '서울',
//     pet: 'dog',
//   },
// ]

// function solveModern() {
//   return people
//     .map(({ pet: petOrPets, city }) => {
//       const pets = typeof petOrPets === 'string' ? [petOrPets] : petOrPets || []

//       return {
//         city,
//         pets,
//       }
//     })
//     .flatMap(({ city, pets }) => pets.map((pet) => [city, pet]))
//     .reduce((result, [city, pet]) => {
//       return {
//         ...result,
//         [city]: {
//           ...result[city],
//           [pet]: (result[city]?.[pet] || 0) + 1,
//         },
//       }
//     }, {})
// }

// console.log('solveModern()', solveModern())

// @ts-check

// 프레임워크 없이 간단한 토이프로젝트 웹 서버 만들어보기
/**
 * 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용할 예정 (JSON)
 * - 인증 로직은 넣지 않습니다.
 * - RESTful API를 사용합니다.
 */

const http = require('http')

/**
 * Post
 *
 * GET /posts
 *
 * GET /posts/:id
 * POST /posts
 *
 */

// const server = http.createServer((req, res) => {
//   if (req.url === '/posts' && req.method === 'GET') {
//     res.statusCode = 200
//     res.end('List of post')
//   } else if (req.url && /^\/posts\/[a-zA-Z0-9-_]+$/.test(req.url)) {
//     res.statusCode = 200
//     res.end('Some content of the post')
//   } else if (req.url === '/posts' && req.method === 'POST') {
//     res.statusCode = 200
//     res.end('Creating post')
//   } else {
//     res.statusCode = 404
//     res.end('Not found')
//   }

//   res.statusCode = 200
//   res.end('Hello~~~!')
// })

// const PORT = 4000
// server.listen(PORT, () => {
//   /* eslint-disable */
//   console.log(`The server is listening at port: ${PORT}`)
// })

const fs = require('fs')
const url = require('url')

var queryData = url.parse('http://localhost:3000/create/?id=1.html/', true)
console.log(queryData)
