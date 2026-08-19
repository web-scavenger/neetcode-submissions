class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // for encode we use separator #
        // iterate via strs and create str with length#str
        // time: O(n)
        // space: O(m)

        let res = ''

        for(let i = 0; i < strs.length; i++) {
            res += `${strs[i].length}#${strs[i]}`
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // for decode we use pointer
        // while pointer < str.length
        // count till === separator elements
        // get this like a length for str
        // get str skiping separator form str
        // push result 
        // time: O(m)
        // space: O(n)

        const res = [];
        let pointer = 0;

        while(pointer < str.length) {
            let count = pointer;

            while(str[count] !== '#') {
                count++
            }

            const length = Number(str.slice(pointer, count)) // 0, 1
            const start = count + 1
            const end = start + length
            const s = str.slice(start, end);

            res.push(s)
            pointer = end
        }

        return res;
        
    }
}
