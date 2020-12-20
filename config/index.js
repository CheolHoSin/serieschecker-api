const ENV = process.env.NODE_ENV || 'development'

const fs = require('fs')
const yaml = require('js-yaml')

const raw = fs.readFileSync('./config/config.yaml', 'utf8')
const config = yaml.safeLoad(raw)

module.exports = config[ENV]
