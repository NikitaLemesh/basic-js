const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionStr = "";
  let result = "";
  if (options.addition !== null) {
    if (str === options.addition) {
      str = str + str;
    }
  }
  if (!options.repeatTimes) {
    result = str + options.addition;
  }
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    i + 1 === options.additionRepeatTimes
      ? (additionStr += options.addition)
      : (additionStr += options.addition + options.additionSeparator);
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    let strPlusAdditionStr = str + additionStr;
    i + 1 === options.repeatTimes
      ? (result += strPlusAdditionStr)
      : (result += strPlusAdditionStr + options.separator);
  }
  return result;
}

module.exports = {
  repeater,
};
