class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // sorting
        // iterate via all strs and on each -- sort value, 
        // use sorted value and a key and push the value to map by key
        // map <str, str[]>

        //space: O(m * n) (n - strs, m - unique keys)
        //time: O(m * n logn)


        // hash map
        // iterate via str, on each use filld 0 array with chars calculation as a key
        // add values to key

        // space: O (m * n)
        // time: O(m * n)

        if(strs.length === 1) {
            return [strs]
        }

        const map = new Map();

        for(let i = 0; i < strs.length; i++) {
            const key = new Array(26).fill(0);

            for (const c of strs[i]) {
                const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
                key[idx] += 1
            }

            const keyS = key.join(',')

            if(!map.has(keyS)) {
                map.set(keyS, [])
            }

            map.get(keyS).push(strs[i])
        }

        return [...map.values()]

    }   
}
