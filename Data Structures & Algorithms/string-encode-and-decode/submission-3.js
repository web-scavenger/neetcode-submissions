class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = '';
        for(let i = 0; i < strs.length; i++) {
            str += `${strs[i].length}#${strs[i]}`
        }

        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
            let pointer = 0;
            let result = [];

            while(pointer < str.length) {
                let separator = pointer;

                while (str[separator] !== '#') {
                    separator++
                };

                const length = Number(str.slice(pointer, separator))
                let start = separator + 1;
                let end = start + length

                result.push(str.slice(start, end))

                pointer = end;

            }

            return result
        }
}
