const generateInput = (label, type) => {
	return (
		<p>
			<label>{label}:</label>
			<input type={type} required />
		</p>
	);
};

export default function UserInput() {
	return (
		<section id="user-input">
			<div className="input-group">
				{generateInput('Initial Investment', 'number')}
				{generateInput('Annual Investment', 'number')}
			</div>
			<div className="input-group">
				{generateInput('Expected Return', 'number')}
				{generateInput('Duration', 'number')}
			</div>
		</section>
	);
}
