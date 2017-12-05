// Given a digit string, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below.

// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

/**
 * @param {string} digits
 * @return {string[]}
 */

const digitsMap = {
  1: ['1'],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: ['0']
};

const letterCombinations = digits => {
  if (!digits.length) {
    return [];
  }
  return digits
    .split('')
    .map(digit => {
      return digitsMap[digit];
    })
    .reduce((prev, curr) => {
      let combination = [];
      prev.forEach(prevChar => {
        curr.forEach(currChar => {
          combination.push(prevChar + currChar);
        });
      });
      return combination;
    });
};
