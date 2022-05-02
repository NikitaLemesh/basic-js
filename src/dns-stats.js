const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObj = {};
    let prevItem = '';
    for(let i = 0; i < domains.length; i++) {
      domains[i] = domains[i].split('.');
      domains[i].reverse();
       prevItem = '';
       for(let j = 0; j < domains[i].length; j++){
            prevItem += '.' + domains[i][j];
            resultObj[prevItem] ?  resultObj[prevItem]++ : resultObj[prevItem] = 1;
       }
    }

   return resultObj;
}

module.exports = {
  getDNSStats
};
