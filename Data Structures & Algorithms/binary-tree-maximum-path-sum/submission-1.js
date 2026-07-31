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


    //     1
    //    / \
    //   2   3
    //  / \
    // 4   5
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let res = [root.val];

        const dfs = (node) => {
            if(!node) {
                return 0
            }

            const value = node.val; // 1

            const left = dfs(node.left) // 5
            const right = dfs(node.right) // 4

            res[0] = Math.max(res[0], value + left + right) // 9

            return Math.max(0, value + Math.max(left, right)) // 7
        }

        dfs(root)

        return res[0];
    }
}
