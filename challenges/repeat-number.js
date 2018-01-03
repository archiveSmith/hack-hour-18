/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
<<<<<<< HEAD
  let sorted = array.sort(function(a, b) {
    return a - b;
  });
  
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return sorted[i];
    }
  }
=======

>>>>>>> 7f40f2ab6fdff1468d5da1897b524b6141c42871
}

module.exports = repeatNumbers;
