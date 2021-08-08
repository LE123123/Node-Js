const fs = require('fs')

fs.watch('./src/fs/remainfs/target.txt', (eventType, filename) => {
  console.log(eventType, filename)

  setTimeout(() => fs.renameSync('./src/fs/remainfs/target.txt', './src/fs/remainfs/new_file.txt'), 1000)
  setTimeout(() => fs.renameSync('./src/fs/remainfs/new_file.txt', './src/fs/remainfs/example_file.txt'), 2000)
  setTimeout(() => fs.writeFileSync('./src/fs/remainfs/example_file.txt', 'The file is modified'), 3000)
})

fs.watch('example_file.txt', (eventType, filename) => {
  console.log('\nThe file', filename, 'was modified!')
  console.log('The type of change was:', eventType)
})
