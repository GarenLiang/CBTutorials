/*
In a previous algorithm tutorial we discussed how to traverse a tree using different algorithms. 
Now we'll solve a popular tree algorithm question of determining if a binary tree is a subtree within a larger tree.

In the picture below, you can see that the tree on the left is contained within the tree on the right, 
underneath the gray node with a value of 10.

We can assume the tree is properly constructed via the following code which sets up nodes and links them to their proper child nodes:

*/

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}    

// left tree
var root = new Node(10);
var n1 = new Node(4);
var n2 = new Node(6);
var n3 = new Node(30);

// setup children
n1.right = n3;
root.left = n1;
root.right = n2;

// right tree
var root_r = new Node(26);
var n1_r = new Node(10);
var n2_r = new Node(3);
var n3_r = new Node(4);
var n4_r = new Node(6);
var n5_r = new Node(3);
var n6_r = new Node(30);

// setup children
n3_r.right = n6_r;
n1_r.left = n3_r;
n1_r.right = n4_r;
n2_r.right = n5_r;
root_r.left = n1_r;
root_r.right = n2_r;

/*
To solve this problem in linear time, we will first produce the in-order and pre-order arrays for both trees, 
and then we will determine if the in-order and pre-order arrays of the first tree are contained somewhere within 
the arrays of the second tree. 

The reason the algorithm above works is because to uniquely identify a binary tree, 
an in-order and pre-order traversal is needed. So, because we are getting these traversal arrays for both trees,
the last step will simply be to check if the smaller tree is contained in the larger one by checking their traversal arrays.

*/

// in-order traversal in array format
function in_order(root, nodes) {
    if (root && root.left) {
        in_order(root.left, nodes);   
    }
    nodes.push(root.data);
    if (root && root.right) {
        in_order(root.right, nodes);  
    }
    return nodes;
}

// pre-order traversal in array format
function pre_order(root, nodes) {
    nodes.push(root.data);
    if (root && root.left) {
        pre_order(root.left, nodes);   
    }
    if (root && root.right) {
        pre_order(root.right, nodes);  
    }
    return nodes;
}

// function that takes two root nodes and determines if
// the first tree is a subtree of the second tree
function is_subtree(root, root_r) {  

    // the variables below will hold the values:
    // 4-30-10-6 
    // 4-30-10-6-26-3-3
    var inord1 = in_order(root, []).join('-'); 
    var inord2 = in_order(root_r, []).join('-');

    // 10-4-30-6
    // 26-10-4-30-6-3-3
    var preord1 = pre_order(root, []).join('-');
    var preord2 = pre_order(root_r, []).join('-');

    // check if the left tree is contained with the right tree
    return inord2.indexOf(inord1) !== -1 && preord2.indexOf(preord1) !== -1;

}

is_subtree(root, root_r); // => true

/*The running time of this algorithm is linear, or O(n), because for both trees, 
it only traverses them each exactly two times which is constant. Then to check if a substring is contained 
within another string, a linear time algorithm can be used for this as well, such as the KMP algorithm or others.*/
