/*
This is a common interview question where you need to write a program to find all duplicates in an array.
The elements in the array have no restrictions, but in this algorithm we'll work specifically with integers. 
Finding duplicates in an array can be solved in linear time by using a hash table to store each element as we pass through the
array. The general algorithm is: 

(1) Loop through the array
(2) At each element check if it exists in the hash table, which has a lookup of O(1) time
(3) If the element exists in the hash table then it is a duplicate, if it doesn't exist, insert it into the hash table, 
also O(1)

*/

function duplicates(arr) {
  
  // our hash table to store each element
  // in the array as we pass through it
  var hashTable = [];
  
  // store duplicates
  var dups = [];
  
  // check each element in the array
  for (var i = 0; i < arr.length; i++) {
    
    // if element does not exist in hash table
    // then insert it
    if (hashTable[arr[i].toString()] === undefined) {
      hashTable[arr[i].toString()] = true;
    } 
    
    // if element does exist in hash table
    // then we know it is a duplicate
    else { dups.push(arr[i]); }
    
  }
  
  return dups;
  
}

duplicates([1, 21, -4, 103, 21, 4, 1]);
