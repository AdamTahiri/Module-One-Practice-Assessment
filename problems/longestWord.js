/**
 * Returns the longest word in the array.
 * Ties should go to the earlier word
 * @param {string[]} words - an array containing words
 * @returns {string} - longest word
 *
 * ex: longestWord(["cat", "bird", "hello", "corey", "do"])
 * returns "hello"
 */

const longestWord = words => {
    return words.reduce((word1, word2) => {
        if (word1.length >= word2.length) {
            return word1
        } else {
            return word2
        }
    });
}

module.exports = longestWord;
