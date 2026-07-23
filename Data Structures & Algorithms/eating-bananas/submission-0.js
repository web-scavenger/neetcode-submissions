class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0;
        let r = Math.max(...piles)
        let res = r;

        while(l <= r) {
            const k = Math.floor((l+r) / 2);

            let total = 0;
            for(let i = 0; i < piles.length; i++) {
                total += Math.ceil(piles[i] / k)
            }

            if(total <= h) {
                res = k;
                r = k - 1
            } else {
                l = k + 1
            }
        }

        return res;
    }
}
