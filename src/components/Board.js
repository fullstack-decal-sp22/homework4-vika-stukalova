import React from "react";
import './styles/Board.css';
import Square from "./Square";
import {useState} from 'react';

function Board() {

    // const status = 'Next player: X';
    const [board, setBoard] = useState(Array(9).fill(null));
    const [nextPlayer, setNextPlayer] = useState("X");
    const winningPlayer = findWinner(board);

    function renderSquare(i) {
        return <Square squareValue = {board[i]} Clicked = { () => {
          if(winningPlayer) {
            return
          }
          if (board[i]) {
            return
          }

          const newBoard = board.slice();
          newBoard[i] = nextPlayer;
          setBoard(newBoard);

          if (nextPlayer === "X") {
            setNextPlayer("0")
          } else {
            setNextPlayer("X")
          }

        }}/>;
    }

    function findWinner(board) {
      const possibleWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < possibleWins.length; i++) {
        const [a, b, c] = possibleWins[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return null;
    }

    function status() {
      if (winningPlayer) {
        if(nextPlayer === "X") {
          return "O is the winner!"
        } else {
          return "X is the winner!"
        }
      } else {
        return "Next Player: " + nextPlayer
      }
    }

    return (  
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">
            <p>{status()}</p>
          </div>
        </div>
    )
}

export default Board;