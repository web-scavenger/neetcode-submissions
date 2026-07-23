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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) {
            return null
        }

        const rigth = root.right
        const left = root.left
        root.left = this.invertTree(rigth)
        root.right = this.invertTree(left)

        return root
    }
}
