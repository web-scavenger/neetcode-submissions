/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // sorting
        // iterate via stones while length > 1
        // on each iteration - sort, pop 2 first elems and push if have diff
        // space: O(1)
        // time: O(nˆ2 log n)

        // heap
        // create heap from array
        // iteraate via heap, while size > 1
        // space: O (n)
        // time: O (n log n)
        const maxPQ = new MaxPriorityQueue();

        for(let i = 0; i < stones.length; i++) {
            maxPQ.enqueue(stones[i])
        }

        while(maxPQ.size() > 1) {
            const st1 = maxPQ.dequeue()
            const st2 = maxPQ.dequeue()

            if(st1 !== st2) {
               maxPQ.enqueue(st1 - st2)
            }

        }

        return maxPQ.size() === 0 ? 0 : maxPQ.dequeue()
    }
}
