class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    _isValidSudoku(board) {  
        // brute-force method
        for(let i = 0; i < 9; i++) {
            const seen = new Set();
            for(let j = 0; j < 9; j++) {
                if(board[i][j] === '.') continue;
                if(seen.has(board[i][j])) return false;
                seen.add(board[i][j])
            }
        }

        for(let row = 0; row < 9; row++) {
            const seen = new Set();

            for(let col = 0; col < 9; col++) {
                if(board[col][row] === '.') continue;
                if(seen.has(board[col][row])) return false;

                seen.add(board[col][row])
            }
        }


        for(let square = 0; square < 9; square++) {
            const seen = new Set();

            for(let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }

        return true
    }

    isValidSudoku(board) {
          const rows = new Map();
        const cols = new Map();
        const square = new Map();
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
            const current = board[i][j];
            if (current === ".") continue;
            if (rows.has(i) && rows.get(i).has(current)) {
                return false;
            }
            if (cols.has(j) && cols.get(j).has(current)) {
                return false;
            }
            const sq = `${Math.floor(i / 3)}_${Math.floor(j / 3)}`;
            if (square.has(sq) && square.get(sq).has(current)) {
                return false;
            }
            rows.set(i, rows.has(i) ? rows.get(i).add(current) : new Set([current]));
            cols.set(j, cols.has(j) ? cols.get(j).add(current) : new Set([current]));
            square.set(
                sq,
                square.has(sq) ? square.get(sq).add(current) : new Set([current])
            );
            }
        }

        return true;
    }
}
