/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  var fringe = [{ node: root, depth: 1 }];
  var current = fringe.pop();
  var max = 0;

  while (current && current.node) {
    var node = current.node;

    // Find all children of this node.
    if (node.left) {
      fringe.push({ node: node.left, depth: current.depth + 1 });
    }
    if (node.right) {
      fringe.push({ node: node.right, depth: current.depth + 1 });
    }

    if (current.depth > max) {
      max = current.depth;
    }

    current = fringe.pop();
  }

  return max;
};
