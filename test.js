const program = require('./program')

const test1 = program.doSomething(1, 2)
if (test1 === 3) {
  console.log('test1 => SUCCESS')
} else {
  console.error('test1 => FAILURE')
  process.exit(1)
}
