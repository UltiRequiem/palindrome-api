const { Router } = require('express')

const { validationHandler } = require('../handlers')
const { userSchema } = require('../schemas')
const { PalindromeService } = require('../services')

const router = Router()

router.get(
  '/',
  validationHandler(userSchema, 'query'),
  async (req, res, next) => {
    try {
      const response = await PalindromeService(req.query.word)
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
