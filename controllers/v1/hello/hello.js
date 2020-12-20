const helloFunctions = require('./hello.function')

const getHello = (req, res, next) => {
    try {
        const { hello } = helloFunctions.get()
        res.send({ hello })
    } catch (error) {
        next(error)
    }
}

module.exports = { getHello }
