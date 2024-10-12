import { useState } from 'react';

export default function UserInput() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 4,
		duration: 6,
	});

	const handleInputChange = (label, event) => {
		setUserInput((prev) => {
			return {
				...prev,
				[label]: event.target.value,
			};
		});
	};

	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>'Initial Investment':</label>
					<input
						type="number"
						value={userInput.initialInvestment}
						onChange={(event) => handleInputChange('initialInvestment', event)}
						required
					/>
				</p>
				<p>
					<label>'Annual Investment':</label>
					<input
						type="number"
						value={userInput.annualInvestment}
						onChange={(event) => handleInputChange('annualInvestment', event)}
						required
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>'Expected Return':</label>
					<input
						type="number"
						value={userInput.expectedReturn}
						onChange={(event) => handleInputChange('expectedReturn', event)}
						required
					/>
				</p>
				<p>
					<label>'Duration':</label>
					<input
						type="number"
						value={userInput.duration}
						onChange={(event) => handleInputChange('duration', event)}
						required
					/>
				</p>
			</div>
		</section>
	);
}
