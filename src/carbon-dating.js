const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string') {
    return false;
  }
  let target = Number(sampleActivity);
  if(isNaN(target)) {
    return false;
  } else if(target <= 0 || target > 15) {
    return false;
  }
  const num = 0.1209424;
  const num2 = 15/target;
  num2.toFixed(3);
  const result = Math.log(num2) / num * 1000;
  return  Math.ceil(result);
}

module.exports = {
  dateSample
};
