/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  let result = 0;
  let power = 0;

  for (let i = binary.length - 1; i >= 0; i -= 1) {
    if (binary[i] === '1') result += Math.pow(2, power);
    power += 1;
  }
  return result;
}

function decToBin(decimal) {
  let result = '';

  while (decimal > 0) {
    result += (decimal % 2 === 1 ? '1' : '0');
    decimal = Math.floor(decimal / 2);
  }
  return result;
}

module.exports = binToDec;
