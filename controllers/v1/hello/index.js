const hello = require('./hello')
const functions = require('./hello.function')

module.exports = {
    ...hello,
    functions,
}
