/**
 * Reverse a word
 *
 * @param {string} word The word to reverse
 * @returns {string} The reverse word
 */
function reverseWord(word) {
  return word.split('').reverse().join('')
}

function isPalindrome(word) {
  return new Promise((resolve) => {
    const reversedWord = reverseWord(word)

    resolve({
      reversedWord,
      isPalindrome: reversedWord === word
    })
  })
}

module.exports = isPalindrome
