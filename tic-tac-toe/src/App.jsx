import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from '../winning-combinations';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
	let currentPlayer = 'X';
	if (gameTurns.length) currentPlayer = gameTurns[0].player === 'X' ? 'O' : 'X';
	return currentPlayer;
};

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = deriveActivePlayer(gameTurns);
	let gameBoard = initialGameBoard;

	gameTurns?.forEach((turn) => {
		const { rowIndex, cellIndex } = turn?.square;
		gameBoard[rowIndex][cellIndex] = turn?.player;
	});

	WINNING_COMBINATIONS.forEach((combination) => {
		const [a, b, c] = combination;
	});

	const handleSelectSquare = (rowIndex, cellIndex) => {
		setGameTurns((prevGameTurns) => {
			let currentPlayer = deriveActivePlayer(prevGameTurns);
			const nextGameTurns = [
				{
					square: {
						rowIndex,
						cellIndex,
					},
					player: currentPlayer,
				},
				...prevGameTurns,
			];
			return nextGameTurns;
		});
	};

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName="player 1"
						symbol="X"
						isActive={activePlayer === 'X'}
					/>
					<Player
						initialName="player 2"
						symbol="O"
						isActive={activePlayer === 'O'}
					/>
				</ol>
				<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
			</div>
			<Log gameTurn={gameTurns} />
		</main>
	);
}

export default App;
