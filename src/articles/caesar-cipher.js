// XXX Consider making the code for this a git hub repo. Something like grrypto...
// Then use like this:
//   import { caesar } from 'grrypto'
//   const cyphertext = caesar.encrypt(plaintext, key)
//   const plaintext = caesar.decrypt(ciphertext, key)
//   const plaintext = caesar.crack(ciphertext)

import CaesarCipher from '../scripts/caesar-cipher.js'

(function () {
  // Define all of the characters that can be encrypted.
  // const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']

  // Define an array of the top 100 words used in the English Language
  // const wordList = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us']

  function initialise () {
    console.log('---- init')
    document.getElementById('encrypt').addEventListener('click', encrypt)
    document.getElementById('decrypt').addEventListener('click', decrypt)
    document.getElementById('crack').addEventListener('click', crack)
  }

  function getUserInputs () {
    return {
      key: parseInt(document.getElementById('cipher-key').value),
      text: document.getElementById('text-input').value
    }
  }

  function wipeDisplay () {
    const textDisplay = document.getElementById('text-display')
    textDisplay.innerHTML = ''
  }

  function displayTransformedText (text) {
    const textDisplay = document.getElementById('text-display')
    const textNode = document.createTextNode(text)
    textDisplay.appendChild(textNode)
  }

  function displayFrequencyAnalysis (fa, crackedKey) {
    const textDisplay = document.getElementById('text-display')

    const rows = Object.keys(fa)
    .map(key => {
      const rowClass = crackedKey == key ? ' class="cracked-key"' : ''
      return `<tr ${rowClass}>
        <td>${key}</td>
        <td>${fa[key]}</td>
      </tr>`
    })

    let faTable = `
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `

    textDisplay.innerHTML += faTable

    // const table = document.getElementById('frequency-analysis')
    // const tableHeader = document.createElement('thead')
    // const keyHeader = document.createElement('td')
    // const countHeader = document.createElement('td')
    // keyHeader.appendChild(document.createTextNode('Key'))
    // countHeader.appendChild(document.createTextNode('Count'))
    // tableHeader.appendChild(keyHeader)
    // tableHeader.appendChild(countHeader)
    // table.appendChild(tableHeader)
    // console.log('--- fa ui')
    // Object.keys(fa).forEach(key => {
    //   // REVIEW Is this the best way to do it, or should I use innerHTML, or createElement, or stick with insertRow/insertCell..?
    //   const row = table.insertRow(key)
    //   const keyCell = row.insertCell(0)
    //   const countCell = row.insertCell(1)
    //   keyCell.innerHTML = 'aaa'
    //   countCell.innerHTML = 'bbb'
    // })
    console.log('----- fin')
  }

  function encrypt () {
    const { key, text } = getUserInputs()

    const ciphertext = new CaesarCipher({key: key}).encrypt(text)
    wipeDisplay()
    displayTransformedText(ciphertext)
  }

  function decrypt () {
    const { key, text } = getUserInputs()

    const plaintext = new CaesarCipher({key: key}).decrypt(text)
    wipeDisplay()
    displayTransformedText(plaintext)
  }

  function crack () {
    const { key, text } = getUserInputs()

    const crackResults = new CaesarCipher({key: key}).crack(text)
    wipeDisplay()
    displayTransformedText(crackResults.decrypted)
    displayFrequencyAnalysis(crackResults.fa, crackResults.key)
  }

  window.onload = function () {
    initialise()
  }

  // const textInput = document.getElementById('#text-input')
  // const textDisplay = document.getElementById('#text-display')

})()
