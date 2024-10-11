export default function GameOver({ winner }) {
	return (
		<div id="game-over">
			<h2>Game Over</h2>
			<p>{winner ? `Player ${winner} wins!` : "It's a draw!"}</p>
			<p>
				<button>Play Again</button>
			</p>
		</div>
	);
}
