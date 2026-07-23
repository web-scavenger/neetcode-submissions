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

            const nodeVal = node.val ?? 0;

            rootVal = Math.max(rootVal, nodeVal)

            if(node.val && node.val >= rootVal) {
                count++
            }


            walk(node.left, rootVal)
            walk(node.right, rootVal)
        }

        walk(root, root.val)

        return count;
    }
}
