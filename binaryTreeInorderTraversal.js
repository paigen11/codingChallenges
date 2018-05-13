/* given a binary tree, write iterative and recursive solutions to travese the tree using in-order traversal

Given binary tree:

      1
    /   \
   2     3
  /     / \
4      5   6
      / \
    7    8

In order traversal would look like:
[4,2,1,7,5,8,3,6]

*/
/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    // create a final result array
    var result = [];

    // return empty array if current node is empty
    if(root === null){
        return result;
    }

    // create a helper stack array
    var stack = [];
    // set current equal to root
    var current = root;

    // as long as we haven't reached the end of the tree on the right side traversal, while will continue to be true
    while(true){
        /* as long as the current value doesn't equal null, push its value onto the stack array, and set the new current equal to  current.left, once current.left is null, the while loop break and the left side is traversal is done */
        while(current !== null){
            stack.push(current);
            current = current.left;
        }

        // if the stack length is 0, break the loop
        if(stack.length === 0) {
            break;
        }

        // remove the last item in the stack array and make that current value
        current = stack.pop();
        // push the value of current into the result array
        result.push(current.val);
        // reset current to the current.right value
        current = current.right;
    }

    return result;

};