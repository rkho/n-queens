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
  var board = new Board({n:n});
  var solution = board.rows();
  var colCount = 0;
  var rowCount = 0;

  for (rowCount; rowCount < n; rowCount++){
    board.togglePiece(rowCount, colCount);
    colCount++;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var checkRows = function(row){
    // Iterate across all available columns
    for (var i = 0; i < n; i++){
      // Toggle a piece!
      board.togglePiece(row, i);
      // Immediately check to see if adding this piece causes any conflicts at all.
      if (board.hasAnyRooksConflicts()){
        // If it does, toggle it off right away!
        board.togglePiece(row, i);
        // After that, continue the loop!
        continue;
      } else {
        // If there are no conflicts, check to see if we are on the last row!
        if (row === (n - 1)){
          // If it is, success! A solution! Add one to the solutionCount, and un-toggle
          // this piece.
          solutionCount++;
          board.togglePiece(row, i);
        } else {
          // Otherwise, let's go down a layer.
          checkRows(row + 1);
          // After it's done recursing through, we want to un-toggle this piece anyways for future iterations.
          board.togglePiece(row, i);
        }
      }
    }
  };

  checkRows(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:5});
  var solution = undefined;
  var col = 0;
  var row = 0;

  var checkRows = function(row){
    if (solution === undefined){
      for (var i = 0; i < n; i++){
        board.togglePiece(row, i);
        if (board.hasAnyQueensConflicts(){
        board.togglePiece(row, i);
        continue;
      } else {
        if (row === (n-1)){
          solution = board.rows();
          return;
        } else {
          checkRows(row + 1);
          board.togglePiece(row, i);
        }
      }
    }

  };

  checkRows(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {


  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
