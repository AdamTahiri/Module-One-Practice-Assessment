/**
 * Returns an array of words that have 5 or more letters. 
 * @param {string[]} words - an array containing words
 * @returns {string[]} - words with 5 or more letters
 *
 * ex: onlyStringsGreaterThanOrEqualTo5(["cat", "hello", "corey", "dog"])
 * returns ["hello", "corey"]
 */

function onlyStringsGreaterThanOrEqualTo5(words) {
    let newArr = [];
    words.forEach((word) => {
        if(word.length >= 5) {
            newArr.push(word)
        }
    });
    return newArr
}

// return words.filter(el => el.length >= 5);

module.exports = onlyStringsGreaterThanOrEqualTo5;
