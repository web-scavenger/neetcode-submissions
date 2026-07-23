class TrieNode {
    constructor() {
        this.children = {} // a: TrieNode
        this.end = false;
    }

    hasChild(l) {
        return !!this.children[l]
    }

    addChild(l, node) {
        this.children[l] = node;
    }

    getChild(l) {
        return this.children[l]
    }

    endWord() {
        this.end = true
    }

    isEnd() {
        return this.end
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;

        for(let i = 0; i < word.length; i++) {
            const l = word[i]
            if(!current.hasChild(l)) {
                current.addChild(l, new TrieNode())
            }
            current = current.getChild(l)
        }

        current.endWord()
    }

    deepSearch(root, word) {
        let current = root;
        for(let i = 0; i < word.length; i++) {
            const l = word[i];
            if(l === '.') {
                return Object.values(current.children)
                    .some((c) => this.deepSearch(c, word.slice(i+1)))
            }

            if(!current.hasChild(l)) {
                return false
            }

            current = current.getChild(l)
        }

        return current.isEnd()
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.deepSearch(this.root, word)
    }
}
