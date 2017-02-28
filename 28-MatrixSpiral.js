/*
The input for this problem will be a matrix, or multidimensional array, which will be represented by N arrays each of N length, and your goal is to print the matrix in a spiral order. For example, if the input is:

[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]

then this matrix should be printed out in a list like so:

[1, 2, 3, 6, 9, 8, 7, 4, 5]

The spiral begins at the top left of the matrix and loops around it towards the center in a clockwise pattern. Below is a clever algorithm that uses recursion to print a matrix in spiral order:

Algorithm
 
(1) Every other iteration through the matrix peel off the first row and last column of the matrix.

So for the above array we should get: [[1, 2, 3], [6, 9]]. Store these elements in a list and then pass the modified matrix to another function. The modified matrix currently looks like this:

[[4, 5],
 [7, 8]]

(2) Now peel off the last row and first column from the matrix, reverse each one, and add them to the previous list. Our spiral list should look like the following so far: [[1, 2, 3], [6, 9], [8, 7], [4]].

(3) Now continue from step 1 until the matrix has no elements left and return the final spiraled list.
*/

function layerTopRight(matrix) {
  
  // remove and store the first row from matrix
  var top = matrix.splice(0, 1);
  
  // store the right column of the matrix
  var right = [];
  
  // remove the last column from the matrix
  for (var i = 0; i < matrix.length; i++) {
    var e = matrix[i].splice(-1, 1);  
    right.push(e);
  }
  
  // return the top row and last column elements as a list
  return top.concat(right).toString().split();
  
}

function layerBottomLeft(matrix) {
  
  // remove and store the last row from matrix in reverse order
  var bottom = matrix.splice(matrix.length-1, 1)[0].reverse();
  
  // store the left column of the matrix
  var left = [];
  
  // remove the first column from the matrix
  for (var i = 0; i < matrix.length; i++) {
    var e = matrix[i].splice(0, 1);  
    left.push(e);
  }
  
  // return the top row and last column elements as a list
  return bottom.concat(left.reverse()).toString().split();
  
}

// our main spiral function that will
// return a final spiral ordered list
function spiral(matrix) {
  
  // where we store our final spiraled list
  var spir = [];
  
  while (matrix.length > 0) {
    
    // if only 1 more element left in matrix
    if (matrix.length === 1) { 
      spir.push(matrix[0]); 
      break;
    }
    
    // return the spiraled list of the top row and
    // right column for this matrix
    var tr = layerTopRight(matrix);
    spir.push(tr);
    
    // return the spiraled list of the bottom row and
    // left column for this matrix
    var bl = layerBottomLeft(matrix);
    spir.push(bl);

  }
  
  return spir.toString().split();
  
}

// setup a matrix
var M = [[1, 2, 3], 
         [4, 5, 6], 
         [7, 8, 9]];

// return it in spiral order
spiral(M); 
