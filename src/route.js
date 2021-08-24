const { Router } = require('express')

const schema = require('./schema')

const { validateRequestHandler } = require('./handlers')

const isPalindrome = require('./palindrome')

const router = Router()

router.get(
  '/',
  validateRequestHandler(schema, 'query'),
  async (req, res, next) => {
    try {
      const response = await isPalindrome(req.query.word)
      res.status(200).json(response)
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
