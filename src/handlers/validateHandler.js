/* eslint-disable no-unused-expressions */
const boom = require('@hapi/boom')

function validateRequestHandler(schema, check) {
  return (req, _res, next) => {
    const { schemaError } = schema.validate(req[check], {
      errors: { stack: true }
    })
    schemaError ? next(boom.badRequest(schemaError)) : next()
  }
}

module.exports = validateRequestHandler
