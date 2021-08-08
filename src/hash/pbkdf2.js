const crpyto = require('crypto')

crpyto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64')
  console.log('salt:', salt)
  crpyto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (key) => {
    console.log('password:', key.toString('base64'))
  })
})
