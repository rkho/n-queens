/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  // This definitely creates a new board with nxn squares
  var board = new Board({'n':n});
  // This sets the solution to board.rows(), which can then be affected.
  var solution = board.rows();

  for (var i = 0; i < n; i++){
    for (var j = 0; j < n; j++){
      board.togglePiece(i, j);
      if (board.hasAnyRooksConflicts){
        board.togglePiece(i, j);
      } else {
        break;
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solution = [];
  // var solutionCount = solution.length; //fixme

  // var superChecker = function(rowNum, colNum){
  //   return this.hasRowConflictAt(rowNum) || this.hasColConflictAt(colNum) || this.hasMajorDiagonalConflictAt(colNum) || this.hasMinorDiagonalConflictAt(colNum);
  // };

  // var placeRooks = function(rowNum){
  //   if (rowNum >= n){
  //     return;
  //   }

  //   var tempRow = [];
  //   var rowNum = rowNum || 0;
  //   for (var i=0; i<n; i++){
  //     tempRow[i] = 0;
  //   }
  //   for (var j=0; j<tempRow.length; j++){
  //     tempRow[j] = 1;
  //     if (superChecker(rowNum, j) === true){
  //       tempRow[j] = 0;
  //     } else if (superChecker(rowNum, j) === false){
  //       rowNum++;
  //       placeRooks(rowNum);
  //     }
  //   }
  //   solution[rowNum] = tempRow;
  // };

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
