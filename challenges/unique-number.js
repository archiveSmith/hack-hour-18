/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

function uniqueNumber(array) {
    if(!Array.isArray(array) || array.length === 0) return 0;
    for(let i=0; i < array.length;i++){
      let temp = array.slice();
      let value = temp.splice(i,1);
      if(temp.indexOf(value[0]) === -1) return value[0];
    }
}

module.exports = uniqueNumber;
