/*
We'll try to build up a list of solutions for N starting from the smallest staircase. If we want to climb a staircase of 1 
step (N = 1), then we can only take 1 step to reach the top. Therefore, the solution when N = 1 is 1. 
If we want to climb a staircase of 2 steps (N = 2), we can take either 2 steps, or 1 step and 1 step to reach the top. 
So for N = 2, the solution is 2.

N = 1
Solution = 1

N = 2
Solution = 2

Now what about 3 steps? 


N = 3
Solution = 3

N = 4 
Solution = 5 (from example above)

We can see a pattern beginning to emerge. The solution for N steps is equal to the solutions for N - 1 steps plus N - 2 steps.
Let's confirm this.

N = 3
Solution = (N - 1 steps) + (N - 2 steps)
Solution = (N = 2) + (N = 1)
Solution = (2) + (1)
Solution = 3

N = 4
Solution = (N - 1 steps) + (N - 2 steps)
Solution = (N = 3) + (N = 2)
Solution = (3) + (2)
Solution = 5

It checks out so far! The solution to this problem requires recursion, which means to solve for a particular N, 
we need the solutions for previous N's. Our code solution below will attempt to mimic this process of recursion 
to solve for any N.

*/

function countSteps(N) {
  
  // just as in our solution explanation above, we know that to climb 1 step
  // there is only 1 solution, and for 2 steps there are 2 solutions
  if (N === 1) { return 1; }
  if (N === 2) { return 2; }
  
  // for all N > 2, we add the previous (N - 1) + (N - 2) steps to get
  // an answer recursively
  return countSteps(N - 1) + countSteps(N - 2);
  
}

// the solution for N = 6 will recursively be solved by calculating
// the solution for N = 5, N = 4, N = 3, and N = 2 which we know is 2
countSteps(6); 
