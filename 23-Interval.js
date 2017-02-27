/*
This is a common interview question where the input is a sorted list of disjoint intervals, and your goal is to 
insert a new interval and merge all necessary intervals returning a final new list. For example, if the interval list 
is [[1,5], [10,15], [20,25]] and you need to insert the interval [12,27], then your program should return the new list: 
[[1,5], [10,27]].

Algorithm
  
This seems like a question that would require a lot of code, but the solution is actually quite simple because the array 
of intervals is already sorted for us.

(1) Create an array where the final intervals will be stored.
(2) Push all the intervals into this array that come before the new interval you are adding.
(3) Once we reach an interval in the array that comes after the new interval, add our new interval to the final array.
(4) From this point, check each remaining element in the array and determine if the intervals need to be merged.

*/

function insertInterval(arr, interval) {
  
  var newSet = [];
  var endSet = [];
  var i = 0;

  // add intervals that come before the new interval
  while (i < arr.length && arr[i][1] < interval[0]) {
    newSet.push(arr[i]);
    i++;
  }

  // add our new interval to this final list
  newSet.push(interval);

  // check each interval that comes after the new interval to determine if we can merge
  // if no merges are required then populate a list of the remaining intervals
  while (i < arr.length) {
    var last = newSet[newSet.length - 1];
    if (arr[i][0] < last[1]) {
      var newInterval = [Math.min.apply(null, [last[0], arr[i][0]]), Math.max.apply(null, [last[1], arr[i][1]])];
      newSet[newSet.length - 1] = newInterval;
    } else {
      endSet.push(arr[i]);
    }
    i++;
  }

  return newSet.concat(endSet);
  
}

insertInterval([[1,5],[10,15],[20,25]], [12,27]); 
//insertInterval([[6,7]], [1,9]);
//insertInterval([[6,7]], [1,5]);
//insertInterval([[1,5]], [6,7]);
//insertInterval([[1,5],[6,11],[13,20],[40,50]], [12,19]);  
//insertInterval([[1,5],[10,15],[20,25]], [2,6]); 
//insertInterval([[1,5],[6,11],[13,20],[25,30],[32,55]], [12,45]); 
//insertInterval([[1,5],[6,11],[20,22]], [24,45]); 
