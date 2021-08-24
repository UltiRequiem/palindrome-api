const yup = require('yup')

const responseSchema = yup.object().shape({
  isPalindrome: yup.bool(),
  reversedWord: yup.string().required()
})

module.exports = responseSchema
