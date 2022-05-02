const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const array1 = s1.split("").reduce((acc, item) => {
    acc[item] ? acc[item]++ : (acc[item] = 1);
    return acc;
  }, {});
  const array2 = s2.split("").reduce((acc, item) => {
    acc[item] ? acc[item]++ : (acc[item] = 1);
    return acc;
  }, {});
  for (let key in array1) {
    for (let key2 in array2) {
      if (key === key2) {
        if (array1[key] > array2[key2]) {
          result += array2[key2];
        } else {
          result += array1[key];
        }
      }
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount,
};
