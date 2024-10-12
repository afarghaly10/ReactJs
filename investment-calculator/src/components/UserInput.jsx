export default function UserInput({ onInputChange, inputValues }) {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>'Initial Investment':</label>
					<input
						type="number"
						value={inputValues.initialInvestment}
						onChange={(event) => onInputChange('initialInvestment', event)}
						required
					/>
				</p>
				<p>
					<label>'Annual Investment':</label>
					<input
						type="number"
						value={inputValues.annualInvestment}
						onChange={(event) => onInputChange('annualInvestment', event)}
						required
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>'Expected Return':</label>
					<input
						type="number"
						value={inputValues.expectedReturn}
						onChange={(event) => onInputChange('expectedReturn', event)}
						required
					/>
				</p>
				<p>
					<label>'Duration':</label>
					<input
						type="number"
						value={inputValues.duration}
						onChange={(event) => onInputChange('duration', event)}
						required
					/>
				</p>
			</div>
		</section>
	);
}
