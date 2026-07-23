class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 1) {
            return [strs]
        }

        const map = {};

        for(let i = 0 ; i < strs.length; i++) {
            const c = strs[i];
            const sorted = c.split('').sort().join('');

            if(!map[sorted]) {
                map[sorted] = []
            }

            map[sorted].push(c)
        }

        return Object.values(map)
    }
}
