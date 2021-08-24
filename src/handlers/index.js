/** Easy access to handlers */
const { logErrors, boomifyErrors, errorHandler } = require('./errorHandler')
const notFoundHandler = require('./notFoundHandler')
const validationHandler = require('./validationHandler')

module.exports = {
  logErrors,
  boomifyErrors,
  errorHandler,
  notFoundHandler,
  validationHandler
}
