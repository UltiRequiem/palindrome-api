const { Router } = require('express')

const { validationHandler } = require('../handlers')
const { userSchema } = require('../schemas')
const { PalindromeService } = require('../services')

const router = Router()

router.get('/', (_req, res) => {
  res.send('Introduce the word in the url. Example: https://${URL}/lol')
})

router.get(
  '/:word',
  validationHandler(userSchema, 'query'),
  async (req, res, next) => {
    try {
      res.status(200).json(await PalindromeService(req.params.word))
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
