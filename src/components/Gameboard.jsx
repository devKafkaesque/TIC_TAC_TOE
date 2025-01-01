import { useState } from "react";

export default function Gameboard({ onSelectSquare, activePlayerSymbol }) {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function checkWinner(board) {
        // Check rows, columns, and diagonals
        for (let i = 0; i < 3; i++) {
            if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return true; // Row
            if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return true; // Column
        }
        if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return true; // Diagonal
        if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return true; // Anti-diagonal
        return false;
    }

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = prevGameBoard.map((row) => [...row]);

            // Only make a move if the square is empty
            if (!updatedGameBoard[rowIndex][colIndex]) {
                updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;

                // Check if there's a winner
                if (checkWinner(updatedGameBoard)) {
                    alert(`${activePlayerSymbol} wins!`);
                    return initialGameBoard; // Reset board
                }

                onSelectSquare(); // Only toggle player if valid move
            }

            return updatedGameBoard; // Return the board without changing it if the square was already filled
        });
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
