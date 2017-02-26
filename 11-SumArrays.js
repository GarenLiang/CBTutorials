/*
You will be given an array of several arrays that each contain integers and your goal is to write a function
that will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] 
then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22.

*/
function sum_array(arr) {
  
  // store our final answer
  var sum = 0;
  
  // loop through entire array
  for (var i = 0; i < arr.length; i++) {
    
    // loop through each inner array
    for (var j = 0; j < arr[i].length; j++) {
      
      // add this number to the current final sum
      sum += arr[i][j];
      
    }
    
  }
  
  return sum;
  
}

sum_array([[3, 2], [1], [4, 12]]);
