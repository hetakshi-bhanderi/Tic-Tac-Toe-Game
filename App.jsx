import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  // Check Winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // Handle Single Click for 0
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (boardCopy[index] === 'X' || calculateWinner(boardCopy)) {
      return;
    }
    boardCopy[index] = 'O';
    setBoard(boardCopy);
  };

  // Handle Double Click for X
  const handleDoubleClick = (index) => {
    const boardCopy = [...board];
    if (calculateWinner(boardCopy)) {
      return;
    }
    boardCopy[index] = 'x';
    setBoard(boardCopy);
  };

  // Reset Game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((cell) => cell !== null)) {
    status = 'Draw!';
  } else {
    status = `Click to play!`;
  }

  return (
    <div className="game">
      <h1>Tic-Tac-Toe Game</h1>
      <div className="board">
        {board.map((cell, index) => (
          <button key={index} className="cell" onClick={() => handleClick(index)}  onDoubleClick={() => handleDoubleClick(index)} >
            {cell}
          </button>
        ))}
      </div>
      <h3 className="status">{status}</h3>
      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default App;
