/*
The solution to this algorithm will require 3 pointers to iterate throughout the array, swapping the necessary elements.

(1) Create a low pointer at the beginning of the array and a high pointer at the end of the array.
(2) Create a mid pointer that starts at the beginning of the array and iterates through each element.
(3) If the element at arr[mid] is a 2, then swap arr[mid] and arr[high] and decrease the high pointer by 1.
(4) If the element at arr[mid] is a 0, then swap arr[mid] and arr[low] and increase the low and mid pointers by 1.
(5) If the element at arr[mid] is a 1, don't swap anything and just increase the mid pointer by 1.

This algorithm stops once the mid pointer passes the high pointer.

*/

function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function dutchNatFlag(arr) {
  
  var low = 0;
  var mid = 0;
  var high = arr.length - 1;
  
  // one pass through the array swapping
  // the necessary elements in place
  while (mid <= high) {
    if      (arr[mid] === 0) { swap(arr, low++, mid++); }
    else if (arr[mid] === 2) { swap(arr, mid, high--); }
    else if (arr[mid] === 1) { mid++; }
  }
  
  return arr;
  
}

dutchNatFlag([2,2,2,0,0,0,1,1]); 
