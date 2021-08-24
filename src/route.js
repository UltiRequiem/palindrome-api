const { Router } = require('express')

// TODO: integrate with BOOM
const schema = require('./schema')

const isPalindrome = require('./palindrome')

const router = Router()

router.get('/', null, async (req, res, next) => {
  try {
    const response = await isPalindrome(req.query.word)
    res.status(200).json(response)
  } catch (err) {
    next(err)
  }
})

module.exports = router
