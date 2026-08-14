class Trie {
    constructor() {
        this.children = {};
        this._isWord = false
    }

    isWord() {
        return this._isWord;
    }

    setWord() {
        this._isWord = true
    }

    unsetWord() {
        this._isWord = false
    }

    hasChar(c) {
        return c in this.children
    }

    addWord(word) {
        let rootNode = this; 
        for(let i = 0; i < word.length; i++) {
            const c = word[i];
            if (!(c in rootNode.children)) {
                rootNode.children[c] = new Trie();
            }
            rootNode = rootNode.children[c]
        }

        rootNode.setWord() 
    }
}


class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new Trie();

        for(let i = 0; i < words.length; i++) {
            root.addWord(words[i])
        }

        const ROWS = board.length;
        const COLS = board[0].length;
        const visited = new Set();
        const res = []

        const dfs = (r, c, root, cur) => {

            if(
                r < 0 || 
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                visited.has(`${r}_${c}`) ||
                !root.hasChar(board[r][c])
            ) {
                    return
            }

            root = root.children[board[r][c]]
            visited.add(`${r}_${c}`)
            cur += board[r][c];

            if(root.isWord()) {
                res.push(cur)
                root.unsetWord()
            }

            dfs(r - 1, c, root, cur)
            dfs(r + 1, c, root, cur)
            dfs(r, c - 1, root, cur)
            dfs(r, c + 1, root, cur)

            visited.delete(`${r}_${c}`)
            
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                dfs(r, c, root, '')
            }
        }

        return res;
    }
}
