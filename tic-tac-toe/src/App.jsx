import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from '../winning-combinations';
import GameOver from './components/GameOver';

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
	const [playerName, setPlayerName] = useState({
		x: 'player 1',
		o: 'player 2',
	});
	const activePlayer = deriveActivePlayer(gameTurns);
	let gameBoard = [...initialGameBoard.map((row) => [...row])];

	gameTurns?.forEach((turn) => {
		const { rowIndex, cellIndex } = turn?.square;
		gameBoard[rowIndex][cellIndex] = turn?.player;
	});

	let winner = null;

	WINNING_COMBINATIONS.forEach((combination) => {
		const a = gameBoard[combination[0].row][combination[0].column];
		const b = gameBoard[combination[1].row][combination[1].column];
		const c = gameBoard[combination[2].row][combination[2].column];

		if (a && a === b && a === c) {
			winner = playerName[a.toLowerCase()];
		}
	});

	const isDraw = gameTurns.length === 9 && !winner;

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

	const handleRestartGame = () => setGameTurns([]);

	const handlePlayerNameChange = (symbol, name) => {
		setPlayerName((prevPlayerName) => ({
			...prevPlayerName,
			[symbol.toLowerCase()]: name,
		}));
	};

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName="player 1"
						symbol="X"
						isActive={activePlayer === 'X'}
						onNameChange={handlePlayerNameChange}
					/>
					<Player
						initialName="player 2"
						symbol="O"
						isActive={activePlayer === 'O'}
						onNameChange={handlePlayerNameChange}
					/>
				</ol>
				{(winner || isDraw) && (
					<GameOver winner={winner} onRestart={handleRestartGame} />
				)}
				<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
			</div>
			<Log gameTurn={gameTurns} />
		</main>
	);
}

export default App;
