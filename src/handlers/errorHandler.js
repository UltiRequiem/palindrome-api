const boom = require('@hapi/boom')

const config = require('../config')

/**
 * Remove error stack on production mode
 *
 * @param {object} err
 * @param {object} stack
 * @returns {object}
 */
const errorStack = (err, stack) => (config.dev ? { ...err, stack } : err)

/**
 * Log errors
 *
 * @param {object} err
 * @param {object} _req
 * @param {object} _res
 * @param {function} next
 */
function logErrors(err, _req, _res, next) {
  console.warn(err)
  next(err)
}

/**
 * Convert all errors to Boom errors
 *
 * @param {object} err
 * @param {object} _req
 * @param {object} _res
 * @param {function} next
 */
function boomifyErrors(err, _req, _res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err))
  }
  next(err)
}

/**
 * Error handler for all request
 *
 * @param {object} err
 * @param {object} _req
 * @param {object} res
 */
function errorHandler(err, _req, res) {
  const {
    output: { statusCode, payload }
  } = err

  res.status(statusCode)
  res.json(errorStack(payload, err.stack))
}

module.exports = { logErrors, boomifyErrors, errorHandler }
