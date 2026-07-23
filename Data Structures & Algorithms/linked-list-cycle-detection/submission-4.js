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
        // let current = head;
        // let set = new Set();

        // while(current) {
        //     if(set.has(current)) {
        //         return true
        //     }
            
        //     set.add(current)
        //     current = current.next;

        // }

        // return false

        let s = head;
        let f = head;

        while(f && f.next) {
            s = s.next;
            f = f.next?.next

            if(s === f) {
                return true
            }
        }

        return false
    }
}
