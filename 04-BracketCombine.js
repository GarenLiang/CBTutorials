/*For this popular algorithm interview question, your goal is to print all possible balanced parenthesis combinations up to N. For example:

N = 2
(()), ()()

N = 3
((())), (()()), (())(), ()(()), ()()() 

Algorithm
  
We will implement a recursive function to solve this challenge. The idea is:

(1) Add a left bracket to a newly created string.
(2) If a left bracket was added, potentially add a new left bracket and add a right bracket.
(3) After each of these steps we add the string to an array that stores all bracket combinations.

This recursive solution might be hard to see at first, but using N = 2 as an example, the steps taken are:

N = 2
create (
create ()

N = 1
create ((
create ()(

N = 0
add (())
add ()()

Done when N = 0

Code
*/

var all = [];

function parens(left, right, str) {
  
  // if no more brackets can be added then add the final balanced string
  if (left === 0 && right === 0) {
    all.push(str);
  }
  
  // if we have a left bracket left we add it
  if (left > 0) {
    parens(left-1, right+1, str+"(");
  }
  
  // if we have a right bracket left we add it
  if (right > 0) {
    parens(left, right-1, str+")"); 
  }
  
}

// the parameters parens(x, y, z) specify:
// x: left brackets to start adding
// y: right brackets we can add only after adding a left bracket
// z: the string so far
parens(3, 0, "");
all; 
