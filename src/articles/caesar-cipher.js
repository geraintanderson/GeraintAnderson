// XXX Consider making the code for this a git hub repo. Something like grrypto...
// Then use like this:
//   import { caesar } from 'grrypto'
//   const cyphertext = caesar.encrypt(plaintext, key)
//   const plaintext = caesar.decrypt(ciphertext, key)
//   const plaintext = caesar.crack(ciphertext)

(function () {
  // Define all of the characters that can be encrypted.
  const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']

  // Define an array of the top 100 words used in the English Language
  const wordList = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us']

  function initialise () {
    console.log('---- init')
    document.getElementById('encrypt').addEventListener('click', encrypt)
    document.getElementById('decrypt').addEventListener('click', decrypt)
    document.getElementById('crack').addEventListener('click', crack)
  }

  function encrypt () {
    console.log('--- encrypt')
  }

  function decrypt () {
    console.log('--- decrypt')
  }

  function crack () {
    console.log('--- crack')
  }

  window.onload = function () {
    initialise()
  }

})()
