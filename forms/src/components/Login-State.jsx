import { useState } from 'react';

export default function Login() {
	// handling data in separate states
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	// handle data in a single state
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

	const isInvalidEmail = didEdit.email && !formData.email.includes('@');

	const handleFormChange = (identifier, value) => {
		setFormData((prevState) => ({
			...prevState,
			[identifier]: value,
		}));
		setDidEdit((prevState) => ({
			...prevState,
			[identifier]: false,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('----------------------------');
		console.log(`submitted: >> `);
		console.log('----------------------------');
	};

	const handleInputBlur = (identifier, event) => {
		setDidEdit((prevState) => ({
			...prevState,
			[identifier]: true,
		}));
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						onBlur={(event) => handleInputBlur('email', event)}
						onChange={(event) => handleFormChange('email', event.target.value)}
						value={formData.email}
					/>
					<div className="control-error">
						{isInvalidEmail && <p>Please Enter a valid Email</p>}
					</div>
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={(event) =>
							handleFormChange('password', event.target.value)
						}
						value={formData.password}
					/>
				</div>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
