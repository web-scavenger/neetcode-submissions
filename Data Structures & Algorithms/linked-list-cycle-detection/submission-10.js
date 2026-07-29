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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // fast and slow pointers approach
        // if fast -> undefined -> no cycles
        // if fast = slow -> cycle
        // time: O (n)
        // space: O (1)

        if(!head) {
            return false
        }

        let slow = head;
        let fast = head?.next

        while(fast && fast.next) {
            if(fast.val === slow.val) {
                return true
            }

            slow = slow.next;
            fast = fast?.next?.next
        }

        return false
    }
}
