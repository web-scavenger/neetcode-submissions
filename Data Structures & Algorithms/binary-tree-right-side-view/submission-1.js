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
        // recursivly iterate each node
        // on each step validate res length and level, if less => push value to result
        // time: O(n)
        // space: O(n)

        const res = []

        const walk = (node, lvl) => {
            if(!node) {
                return
            }

            if(res.length <= lvl) {
                res.push(node.val)
            }

            walk(node.right, lvl + 1)
            walk(node.left, lvl + 1)
        }

        walk(root, 0)

        return res;
    }
}
