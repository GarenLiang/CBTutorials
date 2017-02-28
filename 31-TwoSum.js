/*
The two sum problem is a common interview question, and it is a variation of the subset sum problem. There is a popular
dynamic programming solution for the subset sum problem, but for the two sum problem we can actually write an algorithm that 
runs in O(n) time. 

The challenge is to find all the pairs of two integers in an unsorted array that sum up to a given S. For example, if the 
array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 
and 2 + 5 = 7.

Naive solution

A naive approach to this problem would be to loop through each number and then loop again through the array looking
for a pair that sums to S. The running time for the below solution would be O(n2) because in the worst case we are 
looping through the array twice to find a pair. 

*/

// our two sum function which will return
// all pairs in the array that sum up to S
function twoSum(arr, S) {

  var sums = [];

  // check each element in array
  for (var i = 0; i < arr.length; i++) { 

    // check each other element in the array
    for (var j = i + 1; j < arr.length; j++) {

      // determine if these two elements sum to S
      if (arr[i] + arr[j] === S) {
        sums.push([arr[i], arr[j]]);
      }

    }

  }

  // return all pairs of integers that sum to S
  return sums;

}

twoSum([3, 5, 2, -4, 8, 11], 7);     
