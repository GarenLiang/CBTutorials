/*
For this popular algorithm interview question, the input will be a string consisting only of the characters 0, 1 and ?,
where the ? acts as a wildcard that can be either a 0 or 1, and your goal is to print all possible combinations of the string.
For example, if the string is "011?0" then your program should output a set of all strings, which are: ["01100", "01110"].

Algorithm
  
The general algorithm we will write a solution for is:

(1) Call the function with the string and an empty set where we begin pushing 0 and 1's.
(2) Once we reach a ?, then make a copy of each string set, and for half append a 0 and for the other half append a 1.
(3) Recursively call the function with a smaller string until the string is empty.


*/


function patterns(str, all) {
  
  // if the string is empty, return all the string sets
  if (str.length === 0) { return all; }
  
  // if character is 0 or 1 then add the character to each
  // string set we currently have so far
  if (str[0] === '0' || str[0] === '1') {
    for (var i = 0; i < all.length; i++) {
      all[i].push(str[0]);  
    }
  }
  
  // for a wildcard, we make a copy of each string set
  // and for half of them we append a 0 to the string 
  // and for the other half we append a 1 to the string
  if (str[0] === '?') {
    var len = all.length;
    for (var i = 0; i < len; i++) {
      var temp = all[i].slice(0);
      all.push(temp);
    }
    for (var i = 0; i < all.length; i++) {
      (i < all.length/2) ? all[i].push('0') : all[i].push('1');  
    }
  }
  
  // recursively calculate all string sets
  return patterns(str.substring(1), all);
  
}

patterns('10?1?', [[]]);
