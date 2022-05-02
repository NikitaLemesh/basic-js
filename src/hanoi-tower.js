const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const resultTerns = 2 **disksNumber - 1;
  const ternsPerSec = turnsSpeed/3600;
  ternsPerSec.toFixed(4);
  const secondsResult = Math.floor(resultTerns/ternsPerSec);
  return {
    turns:  resultTerns,
    seconds: secondsResult
  }
}

module.exports = {
  calculateHanoi
};
