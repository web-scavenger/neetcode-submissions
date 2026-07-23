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
        let balanced = true;

        const dfs = (node) => {
            if(!node) {
                return 0
            }

            const l = dfs(node.left)
            const r = dfs(node.right)
            const b = Math.abs(l - r) <= 1;
            if(!b) {
                balanced = false
            }

            return 1 + Math.max(l, r)
        }

        dfs(root);


        return balanced;        
    }

}
