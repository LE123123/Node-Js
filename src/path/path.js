const path = require('path')
const string = __filename

console.log('path.sep:', path.sep)
console.log('path.delimiter:', path.delimiter) // 맥의 경우 : -> process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어 있습니다.
console.log('------------------------------')
console.log('string:', string)
console.log('path.dirname():', path.dirname(string))
console.log('path.extname():', path.extname(string))
console.log('path.basename():', path.basename(string))
console.log('path.basename - extname:', path.basename(string, path.extname(string)))
console.log('------------------------------')

console.log('path.parse()', path.parse(string))
console.log('path.isAbsolute():', path.isAbsolute('/Users/ihyunseo'))
console.log('path.isAbsolute():', path.isAbsolute('./test.txt'))
