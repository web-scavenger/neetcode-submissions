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
     * @return {boolean}
     */
    isBalanced(root) {
        return this.dfs(root) >= 0        
    }

    dfs(node) {
        if(!node) {
            return 0
        }

        const l = this.dfs(node.left)
        const r = this.dfs(node.right)

        if(l === -1 || r === -1) {
            return -1
        }
        if(Math.abs(l - r) > 1) {
            return -1
        }

        return 1 + Math.max(l, r)
    }

}
