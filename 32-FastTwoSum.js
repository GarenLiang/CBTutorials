/*
Faster solution

We can write a faster algorithm that will find pairs that sum to S in linear time. The algorithm below makes use of hash 
tables which have a constant lookup time. 
As we pass through each element in the array, we check to see if S minus the current element exists in the hash table. 
We only need to loop through the array once, resulting in a running time of O(n) since each lookup and insertion 
in a hash table is O(1).

Example

If the array is: [4, 5, 1, 8] and the sum is 6 the algorithm would proceed with the steps below:

(1) The hash table is initially empty and the first element in the array is 4. We simply put 4 into the hash table.
(2) The next element is 5. We check to see if the sum minus the current element exists in the hash table. 6 - 5 = 1 
does not exist in the hash table. So add 5 to the hash table.
(3) The next element is 1. We check to see if the sum minus the current element exists in the hash table. 6 - 1 = 5 
does exist in the hash table so we found a pair!

*/

// our two sum function which will return
// all pairs in the array that sum up to S
function twoSum(arr, S) {

  var sums = [];
  var hashTable = {};

  // check each element in array
  for (var i = 0; i < arr.length; i++) {
 
    // calculate S - current element
    var sumMinusElement = S - arr[i];

    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if (hashTable[sumMinusElement.toString()] !== undefined) { 
      sums.push([arr[i], sumMinusElement]);
    }

    // add the current number to the hash table
    hashTable[arr[i].toString()] = arr[i];

  }

  // return all pairs of integers that sum to S
  return sums;

}

twoSum([3, 5, 2, -4, 8, 11], 7);
