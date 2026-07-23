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
     * @return {number[]}
     */
    rightSideView(root) {
        let res = []

        const dfs = (r, depth) => {
            if(!r) {
                return
            }

            if(depth === res.length) {
                res.push(r.val)
            }

            dfs(r.right, depth + 1)
            dfs(r.left, depth + 1)
        }

        dfs(root, 0)

        return res;
    }
}
