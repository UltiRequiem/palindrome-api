/**
 * Reverse a word
 *
 * @param {string} word The word to reverse
 * @returns {string} The reverse word
 */
function reverseWord(word) {
  return word.split('').reverse().join('')
}

function PalindromeService(word) {
  return new Promise((resolve) => {
    const reversedWord = reverseWord(word).toLowerCase().replaceAll(' ', '')

    resolve({
      reversedWord,
      ...(reversedWord === word.toLowerCase().replaceAll(' ', '') && {
        isPalindrome: true
      })
    })
  })
}

module.exports = PalindromeService
