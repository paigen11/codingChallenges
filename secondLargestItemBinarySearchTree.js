/* Write a function to find the 2nd largest element in a binary search tree. ↴

Here's a sample binary tree node class: */

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

/* find largest value in a binary search tree - this should be the right-most node and if there's a right node below it,
that should be greater, and so on recursively... */
function findLargest(rootNode){
    if(!rootNode){
        throw new Error('Tree must have at least one node')
    }
    if(rootNode.right){
        return findLargest(rootNode.right);
    }
    return rootNode.value;
}

/* so make it find the second largest */
/* this'll take O(h)O(h) time (where hh is the height of the tree) and O(h)O(h) space.*/
function findSecondLargest(rootNode){
    if(!rootNode || (!rootNode.left && !rootNode.right)){
        throw new Error('Tree must have at least two nodes')
    }

    // case: we're currently at largest, and largest has a left subtree,
    // so 2nd largest is largest in said subtree
    if(rootNode.left && !rootNode.right){
        return findLargest(rootNode.left);
    }

    // case: we're at parent of largest, and largest has no left subtree,
    // so 2nd largest must be current node
    if(rootNode.right && !rootNode.right.left && !rootNode.right.right){
        return rootNode.value;
    }

    // otherwise: step right
    return findSecondLargest(rootNode.right);
}

/* how can we get this down to constant space? */
/* start with a function for getting the largest value */
function findLargest2(rootNode){
    var current = rootNode;

    while(current){
        if(!current.right){
            return current.value;
        }
        current = current.right;
    }
}

/* with this in mind, we can find the second largest in one walk down the tree */
function findSecondLargest2(rootNode){
    if(!rootNode || (!rootNode.right && !rootNode.left)){
        throw new Error('Node trees need at least two nodes');
    }

    var current = rootNode;

    while(current){
        // case: current is largest and has a left subtree
        // 2nd largest is the largest in that subtree
        if(current.left && !current.right){
            return findLargest2(current.left);
        }

        // case: current is parent of largest, and largest has no children,
        // so current is 2nd largest
        if(current.right && !current.right.left && !current.right.right){
            return current.value;
        }

        current = current.right;
    }
}

/* now we're doing one walk down our BST, which means O(h) time, where h is the height of the tree
(again, that's O(lgn) if the tree is balanced, O(n)O(n) otherwise). O(1)O(1) space */


