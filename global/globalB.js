const A = require('./globalA')

// 프로그램의 규모가 커질 수록 어떤 파일에서 global객체에 값을 대입했는지 찾기 힘들어져 유지 보수에
// 힘이 들게 됩니다.
global.message = '안녕하세요'

/* eslint-disable */
console.log(A())
