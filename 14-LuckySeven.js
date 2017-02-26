/*
A user who was applying to App Academy posted this question on Coderbyte: 

Write a function called lucky_sevens which takes an array of integers and returns true if any three 
consecutive elements sum 
to 7.

To solve this challenge we'll simply loop through the array starting at the 3rd position, and checking if the number at 
this index plus the two previous elements sums to 7. We continue doing this as we loop through the entire array. 
Once we find three elements that sum to 7, we simply return true. If we reach the end of the array without finding 
elements that sum to 7, we return false. 

Below is some code in JavaScript and Python with step-by-step comments.

*/

function lucky_sevens(arr) {
  
  // if less than 3 elements then this challenge is not possible
  if (arr.length < 3) {
    return "not possible";
  }
  
  // because we know there are at least 3 elements we can
  // start the loop at the 3rd element in the array (i=2)
  // and check it along with the two previous elements (i-1) and (i-2)
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] + arr[i-1] + arr[i-2] === 7) {
      return true; 
    }
  }
  
  // if loop is finished and no elements summed to 7
  return false;
  
}

lucky_sevens([2, 1, 5, 1, 0]);
