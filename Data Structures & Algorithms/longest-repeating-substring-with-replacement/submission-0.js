class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // walk via object using two points and try calculate the longest combination
        // time: O(n)
        // space: O(m) => m = 26
        const count = new Map()
        let longest = 0;

        let left = 0;
        let freqCount = 0;

        for(let right = 0; right < s.length; right++) {
            const c = s[right];

            count.set(c, (count.get(c) ?? 0) + 1);
            freqCount = Math.max(freqCount, count.get(c));

            while((right - left + 1) - freqCount > k) {
                count.set(s[left], count.get(s[left]) - 1) 
                left++
            }

            longest = Math.max(right - left + 1, longest)
        }

        return longest

    }
}
