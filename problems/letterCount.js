/**
 * Return a frequency map of each letter in a string, ignores spaces.
 * @param {string} str - a string
 * @returns {Object} - the characters and their frequency
 *
 * ex: letterCount("hello world") //=> {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 *
 */

function letterCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase()
    if (letter === " ") {
    } else if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter] += 1;
    }
  }
  return obj;
}

module.exports = letterCount;
