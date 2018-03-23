
/* Prompt Given a binary tree, return the preorder traversal of its nodes' values.
For example:
  Given binary tree [1,null,2,3],
    1
    \
     2
     /
     3
 return [1,2,3]./*

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    // create an empty array to hold the final node results
    var result = [];
    // create a semi permanent array to hold the node tree results
    var stack = [];

    // check if root is null
    if(root === null){
        return result;
    }

    // push the root into an array
    stack.push(root);

    // as long as the stack has a length, run through the while loop
    while(stack.length){
        // pop the first item off the stack (the root), and assign it to the variable node
        var node = stack.pop();

        // push the node's value on to the final result array
        result.push(node.val);

        // if the right val of the node is not null, push it's value onto the stack array, so it can be iterated through
        if(node.right !== null){
            stack.push(node.right);
        }

        // if the left val of the node is not null, push it's value onto the stack array, so it can be iterated through
        if(node.left !== null){
            stack.push(node.left);
        }
    }
    return result;
};