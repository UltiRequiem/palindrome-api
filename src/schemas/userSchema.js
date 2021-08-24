const joi = require('joi')

const userSchema = joi.object({
  word: joi.string().min(1).required().messages({
    'string.empty': 'word field is empty!',
    'any.required': 'word filed is required'
  })
})

module.exports = userSchema
