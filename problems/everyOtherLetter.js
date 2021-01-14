/**
 * Returns a new string with every other letter.
 * @param {string} str - a string
 * @returns {str} - 
 *
 * ex: everyOtherLetter("mississippi") //=> "msispi"
 *
 */

function everyOtherLetter(str) {
    let newStr = ""
    for(let i = 0; i < str.length; i+=2) {
        newStr += str[i]
    }
    return newStr
}

module.exports = everyOtherLetter;
