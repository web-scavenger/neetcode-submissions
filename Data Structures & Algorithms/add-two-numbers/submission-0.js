/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // brute-force
        // walk via both lists and add elements to array, reverse the array and calculate values
        // time: O (m + n)
        // space: O (m + n)

        // point to the current value to walk via nodes
        // calulate the current values and add extra to prev one if more then 9
        // time: O(m + n)
        // space: O(1)

        let cl1 = l1;
        let cl2 = l2;
        const dummy = new ListNode()
        let current = dummy;
        let extra = 0;

        while (cl1 || cl2 || extra) {
            const e1 = cl1 ? cl1.val : 0;
            const e2 = cl2 ? cl2.val : 0;

            let s = e1 + e2 + extra;
            extra = s > 9 ? 1 : 0;
            
            current.next = new ListNode(s % 10);

    
            current = current.next;
            cl1 = cl1 ? cl1.next : null;
            cl2 = cl2 ? cl2.next : null;
        } 

        return dummy.next;
    }
}
