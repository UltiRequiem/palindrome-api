/* eslint-disable no-unused-expressions */
const boom = require('@hapi/boom')

/**
 * Handler to validate the schema of a request
 *
 * @param {object} schema
 * @param {string} _res
 * @param {string} check
 */
function validationHandler(schema, check) {
  return (req, _res, next) => {
    const { error } = schema.validate(req[check], { errors: { stack: true } })
    error ? next(boom.badRequest(error)) : next()
  }
}

module.exports = validationHandler
