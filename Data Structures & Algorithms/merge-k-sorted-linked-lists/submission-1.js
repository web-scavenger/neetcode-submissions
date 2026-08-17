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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        // walk via list and merge one by one
        // for merge we get two lists, create new one, and iterate one by one based on lower value
        // time: O(n * k)
        // space: O (1)

        if (lists.length === 0) {
            return null;
        }

        let interval = 1;

        while (interval < lists.length) {
            for (let i = 0; i + interval < lists.length; i += interval * 2) {
                lists[i] = this.mergeLists(
                    lists[i],
                    lists[i + interval]
                );
            }

            interval *= 2;
        }

        return lists[0];

    }

    mergeLists(l1, l2) {
        const dummy = new ListNode();
        let cur = dummy;

        while(l1 && l2) {
            if(l1.val < l2.val) {
                cur.next = l1
                l1 = l1.next
            } else {
                cur.next = l2
                l2 = l2.next
            }

            cur = cur.next
        }

        if(l1) {
            cur.next = l1
        }

        if(l2) {
            cur.next = l2
        } 

        return dummy.next
    }
}
