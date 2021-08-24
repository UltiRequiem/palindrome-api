const express = require('express')

const config = require('./config')

const api = express()

const route = require('./route')

api.use('/', route)

api.listen(config.port)
