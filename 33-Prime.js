/*
The sieve of Eratosthenes algorithm generates all the primes up to a given limit. This is a common and fast algorithm used to generate a list of primes up to a given limit. It works by making a list from 1 to N, and then iterating through the list and progressively removing non-prime, composite numbers until only primes are left in a list.

Example

For example, if we wanted to generate all the primes up to the number 30, we first create a list of numbers from 1 to 30 and follow the numbered steps:

1  2  3  4  5  6  7  8  9  10 
11 12 13 14 15 16 17 18 19 20 
21 22 23 24 25 26 27 28 29 30

(Step 1) The algorithm starts at the first number, 1, and removes it because it is not a prime number.
(Step 2) The next number is 2, which is a prime so it stays, but now all multiples of 2 are removed from the list: 4, 6, 8, 10, etc.

   2  3     5     7     9    
11    13    15    17    19    
21    23    25    27    29

(Step 3) The next number is 3, which is a prime so it stays, but now all multiples of 3 are removed from the list: 6, 9, etc.

   2  3     5     7       
11    13          17    19  
      23    25          29 

(Step 4) The next number is 5, which is a prime so it stays, but now all multiples of 5 are removed from the list: 10, 15, etc.

   2  3     5     7       
11    13          17    19  
      23                29 

(Step 5) All the numbers now, 7, 11, 13, etc., are all primes and there are no more multiples of numbers we can remove from the list, so we are done and the list that is left is our list of primes. 

Solution

We will create a function called sieve that will take a limit as a parameter, generate a list of numbers from 1 to limit, and then remove all composite numbers as it loops from 1 to limit. 

Running time

The running time of this algorithm without any optimizations is O(n log log n). The proof of this requires understanding the prime harmonic series and the fact that it converges to (log log n), but a detailed explanation can be found here.

Common optimizations

Some common ways to improve the algorithm are:

(1) No need to store even numbers at all because they cannot be primes
(2) Instead of looping from 2 to N and checking each number, you can loop to √N [1]

*/

// our sieve function which will return a list of primes
// up to the limit argument passed
function sieve(limit) {
 
  var bools = [];
  var primes = [];

  // generate a list of booleans all set to true initially
  // the array is indexed from 2 to limit representing all numbers
  // e.g. [true, true, true, true] = [2, 3, 4, 5]
  for (var i = 1; i < limit; i++) { bools.push(true); } 

  // loop from 2 to limit setting the composite numbers to false
  // we start from 2 because we know 1 is not a prime number
  for (var i = 2; i < limit; i++) {
    if (bools[i-2]) {
      for (var j = i*2; j <= limit; j += i) {
        bools[j-2] = false;    
      }
    }
  }
  
  // now generate the list of primes only where
  // there is a true value in the bools array
  for (var p = 0; p < bools.length; p++) {
    if (bools[p]) { primes.push(p+2); }
  }
  
  return primes;

} 

sieve(30);
