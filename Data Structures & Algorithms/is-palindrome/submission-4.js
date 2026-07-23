class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // brute-force 
        // filter all elements to ignore non-alpa chars
        // join the string by ' '
        // and eq to reversed string;
        // time: O(n)
        // space: O(n)

        // two pointer
        // left = 0 and right = length - 1
        // while s[pointer] ! alpha ->  inc/dec 
        // if pointer  != return false;
        // in the end return true
        // time: O(n)
        // space: O(1)

        let l = 0;
        let r = s.length - 1;

        while(l < r) {
            while(l < r && !this.isAlphaChar(s[l])) {
                l++
            }

            while(l < r && !this.isAlphaChar(s[r])) {
                r--;
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }

            l++;
            r--;
        }

        return true
    }

    isAlphaChar(char) {
        return /^[a-zA-Z0-9]$/.test(char);
    }
}
