import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

const deriveActivePlayer = (gameTurns) => {
	let currentPlayer = 'X';
	if (gameTurns.length) currentPlayer = gameTurns[0].player === 'X' ? 'O' : 'X';
	return currentPlayer;
};

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = deriveActivePlayer(gameTurns);

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
				<GameBoard onSelectSquare={handleSelectSquare} gameTurn={gameTurns} />
			</div>
			<Log gameTurn={gameTurns} />
		</main>
	);
}

export default App;
