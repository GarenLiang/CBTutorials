function ArrayAdditionI(arr) {
  
  // get largest number and remove it from array
  var sum = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(sum), 1);
  
  // power set
  var sets = [[]];

  // generate the power set and for each new set
  // check if the temporary sum equals our sum above
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len = sets.length; j < len; j++) {
      var temp = sets[j].concat(arr[i]);
      sets.push(temp);
      var s = temp.reduce(function(p, c) { return p + c; });
      if (s === sum) { return "true"; }
    }
  }
  
  return "false";
         
}
   
ArrayAdditionI(readline()); 
/*
Dynamic programming code

This algorithm runs in O(Sn) time where S is the sum. You can read more about the running time here.

*/
function ArrayAddition(arr) {

  // get largest number and remove it from array
  var sum = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(sum), 1);
  
  // clever way to get rid of negative values
  for (var i = 0; i < arr.length; i++) { 
    if (arr[i] < 0) {
      sum -= arr[i];
      arr[i] = 0;
    }
  }

  // table to track elements
  var table = [[]];
  
  // fill first row 
  for (var i = 1; i <= sum; i++)
    table[0][i] = false; 
  
  // fill first column
  for (var i = 0; i <= arr.length; i++) {
    table[i][0] = true; 
    if (i !== arr.length) 
      table.push([]);
  }
  
  // dynamic programming solution
  for (var i = 1; i <= arr.length; i++) {
    for (var j = 1; j <= sum; j++) {
      table[i][j] = table[i-1][j];
      if (table[i][j] === false && j >= arr[i-1]) {
        table[i][j] = table[i][j] || table[i-1][j-arr[i-1]];
      }
    }
  }
  
  return table[arr.length][sum];
         
}
   
ArrayAddition([1, 2, 6, 4, 7, 12]);
