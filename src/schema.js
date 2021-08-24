const joi = require('joi')

const responseSchema = joi.object({
  text: joi.string().min(1).required().messages({
    'string.empty': 'no text',
    'any.required': 'text field is required'
  })
})


module.exports = { schema: responseSchema }
