// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = s => {
  let charMap = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]]) {
      stack.push(charMap[s[i]]);
    } else {
      if (s[i] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
