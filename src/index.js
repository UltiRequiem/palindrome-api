const express = require('express')
const cors = require('cors')

const config = require('./config')
const { rootRouter } = require('./routes')

const {
  notFoundHandler,
  logErrors,
  errorHandler,
  boomifyErrors
} = require('./handlers')

const api = express()

// Plugins
api.use(cors())

// Principal (and unique) root
api.use('/', rootRouter)

// Error Handlers
api.use(notFoundHandler)
api.use(boomifyErrors)
api.use(logErrors)
api.use(errorHandler)


// Main
api.listen(config.port, () =>
  console.log(`The API is listening on http://localhost:${config.port}`)
)
