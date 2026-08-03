class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        // iterate all element 
        // dive inside each elements in 4 directions to if current element = word[i]
        // use backtracking to dive deeper 
        // mark visited positions to move correct
        // space: O (n)
        // time: O(m * 4 ^n)

        const ROWS = board.length;
        const COLS = board[0].length;

        const backtrack = (r, c, i) => {
            if(i === word.length) {
                return true
            }

            if(
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS || 
                board[r][c] !== word[i] ||
                board[r][c] === '#'
            ) {
                return false
            }

            // r = 1
            // c = 2

            board[r][c] = '#'

            const res = backtrack(r - 1, c, i+1) || 
                        backtrack(r + 1, c, i+1) || 
                        backtrack(r, c + 1, i+1) || 
                        backtrack(r, c - 1, i+1)

            board[r][c] = word[i]
            
            return res;
        }




        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                if(backtrack(i, j, 0)) {
                    return true
                }
            }
        }

        return false

    }
}
