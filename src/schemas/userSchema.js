const joi = require('joi')

const userSchema = joi.object({
  params: joi.object({
    word: joi.string()
  })
})

module.exports = userSchema
