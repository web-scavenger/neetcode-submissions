class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // 1. brute-force
        // sort s1
        // walk via elements using windows size, sort and compare
        // time: O(n* n log n )
        // space: O(n)

        const map = new Map();

        for(let i = 0; i < s1.length; i++) {
            map.set(s1[i], (map.get(s1[i]) ?? 0) + 1)
        }

        const need = map.size;

        for(let i = 0; i < s2.length; i++) {
            const inMap = new Map();
            let count = 0;


            for(let j = i; j < s2.length; j++) {
                inMap.set(s2[j], (inMap.get(s2[j]) ?? 0) + 1)

                if((map.get(s2[j])?? 0) < inMap.get(s2[j])){
                    break;
                }

                if(map.get(s2[j]) === inMap.get(s2[j])) {
                    count++
                }

                if(count === need) {
                    return true
                }


            }
        }

        return false
    }
}
