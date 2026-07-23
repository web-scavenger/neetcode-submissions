class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.lenght === 1) {
            return [strs]
        }

        const map = {};

        for (let i = 0; i < strs.length; i++) {
            const e = strs[i];
            const stand = e.split('').sort().join('');

            if(!map[stand]) {
                map[stand] = []
            }

            map[stand].push(e)
        }

        return Object.values(map)
    }   
}
