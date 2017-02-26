/*
This is one type of very common interview question that is usually asked, where your goal is to implement some built-in 
language function, such as exponentiation, division, hash tables, etc. In this challenge we need to implement exponentiation, 
or raising a to some power of b which is usually written pow(a, b). In this variation of the challenge, we also need to 
implement a solution without using the multiplication or division operations, 
only addition and subtraction are allowed.

*/
// our modified pow function that raises a to the power of b
// without using multiplication or division
function modPow(a, n) {
  
  // convert a to positive number
  var answer = Math.abs(a);
  
  // store exponent for later use
  var exp = n;
  
  // loop n times
  while (n > 1) {
    
    // add the previous added number n times
    // e.g. 4^3 = 4 * 4 * 4
    //      4*4 = 4 + 4 + 4 + 4 = 16
    //     16*4 = 16 + 16 + 16 + 16 = 64
    var added = 0;
    for (var i = 0; i < Math.abs(a); i++) { added += answer; }
    answer = added;
    n--;
    
  }
  
  // if a was negative determine if the answer will be
  // positive or negative based on the original exponent
  // e.g. pow(-4, 3) = (-4)^3 = -64
  return (a < 0 && exp % 2 === 1) ? -answer : answer;
  
}

modPow(2, 10); 
//modPow(5, 4); 
//modPow(-4, 7); 
