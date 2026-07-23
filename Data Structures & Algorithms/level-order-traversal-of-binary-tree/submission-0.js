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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = []
        const bfs = (node, depth) => {
            if(!node) {
                return
            }

            if(res.length === depth) {
                res.push([])
            }

            res[depth].push(node.val);
            bfs(node.left, depth + 1)
            bfs(node.right, depth + 1)
        }

        bfs(root, 0)

        return res
    }
}
