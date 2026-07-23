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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // we can use here recursive flow
        // to walk in every iteration insed list depends on value
        // ands set the result to next
        // time: O( n + m)
        // space: O(n + m)

        // if(!list1) {
        //     return list2
        // } 

        // if(!list2) {
        //     return list1
        // }

        // if(list1.val < list2.val) {
        //     list1.next = this.mergeTwoLists(list1.next, list2)
        //     return list1
        // } else {
        //     list2.next = this.mergeTwoLists(list1, list2.next)
        //     return list2
        // }

        let dummy = new ListNode();
        let node = dummy;

        while(list1 && list2) {
            if(list1.val < list2.val) {
                node.next = list1
                list1 = list1.next
            } else {
                node.next = list2
                list2 = list2.next;
            }

            node = node.next
        }

        if(!list1) {
            node.next = list2
        }

        if(!list2) {
            node.next = list1
        }

        return dummy.next;

        
    }
}
