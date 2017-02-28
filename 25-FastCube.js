/*

The is a clever interview question that asks you to calculate the cube root of a number quickly.
We can solve this by some mathematical tricks that won't require any calculates to take place, only table lookups. 
This algorithm will focus on calculating the cube root of 6 digit numbers (or less). For example, if the input is 
636056 then your program should output 86

Example 1

If the input is 148877.

(1) A table has been created.
(2) After ignoring the last 3 digits, we are left with 148. The largest cube less than this number is 125, and the 
corresponding cube root is 5.
(3) For the last 3 digits, 877, the last number is 7. When we get to the 7th index in the table, we see that the last
column number is 3.
(4) The cube root of 148877 is therefore: 53.

Example 2

If the input is 830584.

(1) A table has been created.
(2) After ignoring the last 3 digits, we are left with 830. The largest cube less than this number is 729, and the 
corresponding cube root is 9.
(3) For the last 3 digits, 584, the last number is 4. When we get to the 4th index in the table, 
we see that the last column number is 4.
(4) The cube root of 830584 is therefore: 94.

*/

function fastCubeRoot(num) {
  
  var cubes_10 = {
      '0': 0,
      '1': 1,
      '8': 8,
     '27': 7,
     '64': 4,
    '125': 5,
    '216': 6,
    '343': 3,
    '512': 2,
    '729': 9
  };
  
  // get last 3 numbers and the remaining numbers
  var arr = num.toString().split('');
  var last = arr.slice(-3);
  var first = parseInt(arr.slice(0, -3).join(''));
  
  // answer will be stored here
  var lastDigit = 0, firstDigit = 0, index = 0;
  
  // get last digit of cube root
  for (var i in cubes_10) {
    if (index === parseInt(last[last.length-1])) { lastDigit = cubes_10[i]; }
    index++;
  }
  
  // get first digit of cube root
  index = 0;
  for (var i in cubes_10) {
    if (parseInt(i) <= first) { firstDigit = index; }
    index++;
  }
  
  // return cube root answer
  return firstDigit + '' + lastDigit;
  
}

fastCubeRoot(830584); 
