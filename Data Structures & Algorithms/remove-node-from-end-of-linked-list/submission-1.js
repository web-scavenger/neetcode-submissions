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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let first = dummy;
        let second = dummy;

        while(n >= 0) {
            first = first.next
            n--;
        }

        while(first !== null) {
            first = first.next;
            second = second.next
        }

        second.next = second.next.next

        return dummy.next
    }
}
