'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
    // debugger
 
     var temp1, temp2;
     for (var i = 0, j = array.length - 1; i < Math.floor(array.length/2); i++, j--) {
             temp1 = array[i];
             temp2 = array[j];
             array[j] = temp1;
             array[i] = temp2;
     }
     
 }

module.exports = reverseInPlace;

[1, 2, 3, 4]

temp = 4;