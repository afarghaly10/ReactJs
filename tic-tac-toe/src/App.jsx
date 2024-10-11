import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const [activePlayer, setActivePlayer] = useState('X');

	const handleSelectSquare = (rowIndex, cellIndex) => {
		setActivePlayer((prevActivePlayer) => {
			return prevActivePlayer === 'X' ? 'O' : 'X';
		});

		setGameTurns((prevGameTurns) => {
			let currentPlayer = 'X';
			if (prevGameTurns.length)
				currentPlayer = prevGameTurns[0].player === 'X' ? 'O' : 'X';
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
