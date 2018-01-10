/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


// function findInOrderedSet(arr, target) {
//   return arr.indexOf(target) === -1 ? false : true;  
// }

let count = 0;

function findInOrderedSet(arr,target){
  if(arr[count] === target) {
    count = 0;
    return true;
  } else if (count > arr.length){
    return false;
  } else {
    count++;
    return findInOrderedSet(arr,target)
  }
}

module.exports = findInOrderedSet;
