/**
 * Return the product of all odd numbers in an array.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - product of all the odd numbers
 *
 * ex: productOfOddNumbers([1, 2, 3, 4, 5])
 * returns 15
 */

function productOfOddNumbers(nums) {
  let product = 1;
  let evenNum = nums.every((num) => {
    return num % 2 === 0;
  });
  if (evenNum) {
    return 0;
  }
  nums.forEach((num) => {
    if (num % 2 === 1) {
      product *= num;
    }
  });
  return product;
}

// let prod = 1;
// const newArr = num.filter(num => el % 2 === 1);
// if(newArr.length === 0) {
//   prod *= el
// }
// return prod

module.exports = productOfOddNumbers;
