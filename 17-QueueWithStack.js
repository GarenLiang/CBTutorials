/*
Algorithm for queue using two stacks

For example: Suppose we push "a", "b, "c" to a stack. If we are trying to implement a queue and we call the dequeue method 3 
times, we actually want the elements to come out in the order: "a", "b, "c", which is in the opposite order they would 
come out if we popped from the stack. So, basically, we need to access the elements in the reverse order that they
exist in the stack. The following algorithm will implement a queue using two stacks.

(1) When calling the enqueue method, simply push the elements into the stack 1.
(2) If the dequeue method is called, push all the elements from stack 1 into stack 2, which reverses the order of the elements.
Now pop from stack 2.

*/

// implement stacks using plain arrays with push and pop functions
var Stack1 = [];
var Stack2 = [];

// implement enqueue method by using only stacks
// and the push and pop functions
function Enqueue(element) {
  Stack1.push(element);
}

// implement dequeue method by pushing all elements
// from stack 1 into stack 2, which reverses the order
// and then popping from stack 2
function Dequeue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) { return 'Cannot dequeue because queue is empty'; }
    while (Stack1.length > 0) {
      var p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
Dequeue(); 
