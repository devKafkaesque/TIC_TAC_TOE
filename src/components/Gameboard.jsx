import { useState } from "react";

export default function Gameboard({onSelectSquare, activePlayerSymbol}) {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            // Create a deep copy of the game board
            const updatedGameBoard = prevGameBoard.map((row) => [...row]);
            if (!updatedGameBoard[rowIndex][colIndex]) { // Allow updates only if the square is empty
                updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            }
            return updatedGameBoard;
        });
        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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
