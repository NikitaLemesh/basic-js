const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const arr2 = arr.concat();
  const result = [];
  const items = [
    "--double-next",
    "--double-prev",
    "--discard-next",
    "--discard-prev",
  ];
  if (arr2[0] === items[1] || arr2[0] === items[3]) {
    arr2.splice(0, 1);
    return arr2;
  } else if (arr2[arr2.length - 1] === items[0] || arr2[arr2.length - 1] === items[2]) {
    arr2.splice(-1, 1);
    return arr2;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (items.includes(arr2[i])) {
      switch (arr2[i]) {
        case items[0]:
          arr2[i] = arr2[i + 1];
          result.push(arr2[i]);
          break;
        case items[1]:
          arr2[i] = arr2[i - 1];
          result.push(arr2[i]);
          break;
        case items[2]:
          arr2[i + 1] = undefined;
          break;
        case items[3]:
          result.splice(result.length - 1);
          break;
      }
    } else {
      result.push(arr2[i]);
    }
  }
  for(let i = 0; i < result.length; i++) {
    if(result[i] === undefined) {
      result.splice(i, 1);
      i--;
    }
  }
  return result;
}

module.exports = {
  transform,
};
