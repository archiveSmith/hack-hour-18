/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if(typeof base !== 'number' || typeof power !== 'number' ){return undefined}
      if (power < 0) {
        power = Math.abs(power)
        base = 1/base
      }
      if (power === 0){ return 1}
      return base * pow(base, power - 1)
    }

module.exports = pow;
