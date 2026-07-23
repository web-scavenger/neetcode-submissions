class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) {
            return ''
        }

        if(t === s) {
            return t
        }

        const seen = new Map()
        const window = new Map()

        for(let i = 0; i < t.length; i++) {
            seen.set(t[i], (seen.get(t[i]) || 0) + 1)
        }

        let have = 0;
        let need = seen.size;
        let res = [ -1, -1] 
        let resLen = Infinity;
        let l = 0;

        for(let r = 0; r < s.length; r++) {
            const c = s[r]
            window.set(c, (window.get(c) || 0) + 1)

            if(seen.get(c) && window.get(c) === seen.get(c)) {
                have++
            }

            while(have === need) {

                if(r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r]
                }

                window.set(s[l], window.get(s[l]) - 1);

                if(seen.get(s[l]) && window.get(s[l]) < seen.get(s[l])) {
                    have--;
                }

                l++

            }

        }


        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1)

    }
}
