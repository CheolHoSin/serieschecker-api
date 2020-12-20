const config = require('../config')
const server = require('../index')

server.listen(config.app.port, () => {
    console.log('App started')
    console.log(`Let's try it. curl -XGET http://${config.app.host}:${config.app.port}/api/v1/hello`)
})
