import { useState } from "react";

export default function Player({ initialName, symbol, props }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	const buttonName = isEditing ? "Save" : "Edit";

	const handleEditClick = () => {
		setIsEditing((editing) => !editing);
	};

	const handleChange = (event) => {
		setPlayerName(event.target.value);
	};

	return (
		<li>
			<span className="player">
				{!isEditing ? (
					<span className="player-name">{playerName}</span>
				) : (
					<input
						type="text"
						required
						placeholder={playerName}
						onChange={handleChange}
					/>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{buttonName}</button>
		</li>
	);
}
