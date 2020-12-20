const express = require('express')
const HTTP = require('http')
const routes = require('./routes')

const app = express()
const server = HTTP.createServer(app)

app.use(routes)

module.exports = server
