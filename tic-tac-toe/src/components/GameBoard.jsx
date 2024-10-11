const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onSelectSquare, gameTurn }) {
	let gameBoard = initialGameBoard;

	gameTurn?.forEach((turn) => {
		const { rowIndex, cellIndex } = turn?.square;
		gameBoard[rowIndex][cellIndex] = turn?.player;
	});

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((cell, cellIndex) => (
							<li key={cellIndex}>
								<button onClick={() => onSelectSquare(rowIndex, cellIndex)}>
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
