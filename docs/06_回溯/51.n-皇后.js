/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const isValid = (row, col, n, chessBoard) => {
    // 检查列
    for (let i = 0; i < row; i++) {
      if (chessBoard[i][col] === "Q") return false;
    }
    // 检查135度
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBoard[i][j] === "Q") return false;
    }
    // 检查45度
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessBoard[i][j] === "Q") return false;
    }
    return true;
  };
  const backtracking = (row, chessBoard) => {
    if (row === n) {
      result.push(chessBoard.map((arr) => arr.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, n, chessBoard)) {
        chessBoard[row][col] = "Q";
        backtracking(row + 1, chessBoard);
        chessBoard[row][col] = ".";
      }
    }
  };
  const result = [],
    chessboard = Array(n)
      .fill([])
      .map(() => new Array(n).fill("."));
  backtracking(0, chessboard);
  return result;
};
// @lc code=end
