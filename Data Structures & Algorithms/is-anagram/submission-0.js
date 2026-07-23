class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        // let resS = 0;
        // let resT = 0;
        // for (let i = 0; i < s.length; i++) {
        //     resS += s[i].toLowerCase().charCodeAt(0);
        //     resT += t[i].toLowerCase().charCodeAt(0)
        // }

        // return resS === resT

        const map = {};

        for(let i = 0; i < s.length; i++) {
            map[s[i]] = (map[s[i]] || 0) + 1
            map[t[i]] = (map[t[i]] || 0) - 1
        }

        return Object.values(map).every(el => el === 0);
    }

    
}
