class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = '';
        for(let i = 0; i < strs.length; i++) {
            str += `${strs[i].length}#${strs[i]}#`
        }

        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
            let pointer = 0;
    let count = "";
    let result = [];
    let lock = true;
    while (pointer < str.length) {
      const s = str[pointer];

      if (lock) {
        if (s === "#") {
          count = Number(count);
          lock = false;
        } else {
          count += s;
        }
        pointer++;
      } else {
        result.push(str.slice(pointer, count + pointer));
        pointer += count + 1;
        count = "";
        lock = true;
      }
    }

    return result;
    }
}
