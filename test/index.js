const test = require('test')
test.setup()

require('./sqlite')
require('./mysql')

test.run(console.DEBUG)