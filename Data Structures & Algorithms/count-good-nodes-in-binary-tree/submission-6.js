/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let count = 0;

        const walk = (node, rootVal) => {
            if(!node) {
                return;
            }

            if(node.val >= rootVal) {
                count++
            }

            rootVal = Math.max(node.val, rootVal)

            walk(node.left, rootVal)
            walk(node.right, rootVal)
        }

        walk(root, root.val)

        return count;
    }
}
