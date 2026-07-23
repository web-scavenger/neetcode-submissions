class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        return this.search(this.keyStore.get(key), timestamp )
    }

    search(arr = [], value) {
        let l = 0;
        let r = arr.length - 1;
        let res = ''

        while(l <= r) {
            const mid = Math.floor((l + r) / 2);
            const c = arr[mid][0]
            if(c <= value) {
                res = arr[mid][1]
                l = mid + 1;
            } else {
                r = mid - 1;
            } 
        }

        return res
    }
}
