const boom = require('@hapi/boom')

/**
 * 404 Status Code
 *
 * @param {object} _req
 * @param {object} res
 */
function notFoundHandler(_req, res) {
  const {
    output: { statusCode, payload }
  } = boom.notFound()
  res.status(statusCode).json(payload)
}

module.exports = notFoundHandler
