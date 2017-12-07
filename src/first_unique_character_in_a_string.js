/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = str => {
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    charMap[s[i]] ? charMap[s[i]]++ : (charMap[s[i]] = 1);
  }

  for (let key in charMap) {
    if (charMap[key] === 1) {
      return s.indexOf(key);
    }
  }

  return -1;
};
