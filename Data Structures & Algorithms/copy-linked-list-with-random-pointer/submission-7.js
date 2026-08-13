// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    constructor() {
        this.map = new Map()
    }
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        // create new copy Node by current head
        // set this copy node map by head
        // look recursivly for next for copy
        // random for copy get from map or set to null
        // return the copy

        // time: O(n)
        // space: O(n)

        if(!head) {
            return null
        }

        if(this.map.has(head)) {
            return this.map.get(head)
        }

        const copy = new Node(head.val);
        this.map.set(head, copy);
        copy.next = this.copyRandomList(head.next);
        copy.random = this.map.get(head.random) ?? null;

        return copy
    }
}
