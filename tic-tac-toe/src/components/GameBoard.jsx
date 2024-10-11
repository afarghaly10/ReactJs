import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard() {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	const handleSelectSquare = (rowIndex, cellIndex, symbol) => {
		setGameBoard((prevGameBoard) => {
			const updatedBoard = [...prevGameBoard.map((row) => [...row])];
			updatedBoard[rowIndex][cellIndex] = "X";
			return updatedBoard;
		});
	};

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((cell, cellIndex) => (
							<li key={cellIndex}>
								<button onClick={() => handleSelectSquare(rowIndex, cellIndex)}>
									{cell}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
