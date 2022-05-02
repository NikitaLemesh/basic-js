const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    let result = '';
    const season = {
      winter: [11, 0, 1],
      spring: [2, 3, 4],
      summer: [5, 6, 7],
      fall: [8, 9, 10],
    };
    let correctDate = date;
    let month = correctDate.getMonth();
    for (let key in season) {
      for (let i = 0; i < season[key].length; i++) {
        if (month === season[key][i]) {
          result = key;
        }
      }
    }
      return result;
  } catch(e) {
    throw new Error('Invalid date!');
  }
  
}

module.exports = {
  getSeason,
};
