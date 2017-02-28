/*
This is a common interview question where you need to write a program to find all duplicates in an array where the numbers in the array are in the range of 0 to n-1 where n is the size of the array. For example: [1, 2, 3, 3] is okay but [1, 2, 6, 3] is not. In this version of the challenge there can be multiple duplicate numbers as well.

The algorithm below is commented to explain what each piece of code does, but the general algorithm is:

(1) Loop through the array 
(2) For each element, find array[absolute(array[i])] in the array and set its value to negative if positive
(3) If in step 2 you encounter a negative number, then it means the element at index i in the array is a duplicate

An example
 
arr = [1, 2, 2, 3, 1]

At i = 0
arr[absolute(arr[0])] = 2 which is positive so make it negative

arr = [1, -2, 2, 3, 1]

At i = 1
arr[absolute(arr[1])] = 2 which is positive so make it negative

arr = [1, -2, -2, 3, 1]

At i = 2 
arr[absolute(arr[2])] = -2 which is negative which means the element originally at index 2 is a duplicate
duplicates = [2]

At i = 3 
arr[absolute(arr[3])] = 3 which is positive so make it negative

arr = [1, -2, -2, -3, 1]

At i = 4
arr[absolute(arr[4])] = -2 which is negative which means the element originally at index 4 is a duplicate
duplicates = [2, 1]

*/

function duplicates(arr) {
  
  // where we will store our duplicate values
  var dups = [];

  for (var i = 0; i < arr.length; i++) {
    
    // get element in array
    var el = arr[Math.abs(arr[i])];
    
    // element in array is positive so make it negative
    if (el > 0) { arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])]; }
    
    // special case if element is zero
    // we set the value at this index to -arr.size as not to
    // mix this number up with the others because we know the
    // numbers are all in the range of 0 to n-1
    else if (el === 0) { arr[Math.abs(arr[i])] = -arr.length; }
    
    // element is negative so it is a duplicate
    else { 
      if (Math.abs(arr[i]) === arr.length) { dups.push(0); }
      else { dups.push(Math.abs(arr[i])); }
    }
    
  }
  
  return dups;
  
}

duplicates([0,2,0,1,3,3]);
