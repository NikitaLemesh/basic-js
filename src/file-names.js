const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = {};
    const arrResult = [];
    for(let i = 0; i < names.length; i++) {
        const item = names[i];
        if(!arrResult.includes(names[i])) {
            obj[item] = 1;
            arrResult.push(item);
        } else if(arrResult.includes(item) && obj[item]) {
            arrResult.push(`${item}(${obj[item]++})`);
        } else if(arrResult.includes(item) && !obj[item]) {
            obj[item] = 1;
            arrResult.push(`${item}(${obj[item]})`);
        }
    }
    return arrResult;
}

module.exports = {
  renameFiles
};
