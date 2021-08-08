const exec = require('child_process').exec

var process = exec('ls')

process.stdout.on('data', (data) => {
  console.log(data.toString())
})
