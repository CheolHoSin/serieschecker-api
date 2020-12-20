const express = require('express')
const { hello } = require('../../../controllers').v1

const router = express.Router()

router.get('/', hello.getHello)

module.exports = router
