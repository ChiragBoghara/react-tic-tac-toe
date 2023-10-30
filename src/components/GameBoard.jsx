import { useState } from "react";

export default function GameBoard({ board, handleClick }) {
  
  // const [gameBoard,setGameBoard] = useState(initialGameBoard);

  // function handleClick(rowIndex,colIndex){
  //     setGameBoard((prevGameBoard)=>{
  //         const updatedBoard = [...prevGameBoard.map((innerArray)=> [...innerArray])];
  //         updatedBoard[rowIndex][colIndex]=symbol;
  //         return updatedBoard;
  //     });

  //     onClick();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClick(rowIndex, colIndex)} disabled={playerSymbol!==null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
