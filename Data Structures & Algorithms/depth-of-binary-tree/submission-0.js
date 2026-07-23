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
    maxDepth(root) {
        return this.walk(root, 0)
    }

    walk(root, count) {
        if(!root) {
            return count
        }

        // l -> 2
        // r -> 3

        const left = this.walk(root.left, count + 1)
        // 1
        const right = this.walk(root.right, count + 1)
        // 1
        return Math.max(left, right)
    }
}
