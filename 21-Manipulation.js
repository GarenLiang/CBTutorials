function doubling(num) {
  return num * 2;
} 

// create an array of arbitrary numbers and store the 
// array in the variable arr
var arr = [1, 2, 5, 7, 10];  

// create an empty object
var obj = {};

for (var i = 0; i < arr.length; i++) {

  // the key will be the original number
  var key = arr[i].toString();

  // the value will be the doubled number
  var value = doubling(arr[i]);

  obj[key] = value;

} 

// print the final object 
obj;
