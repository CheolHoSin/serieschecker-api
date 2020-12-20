const { constants } = require('../../../constants')

const get = () => ({
    hello: {
        msg: constants.hello_msg,
    },
})

module.exports = {
    get,
}
