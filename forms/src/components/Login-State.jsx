import { useState } from 'react';
import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';

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

	const isInvalidEmail =
		didEdit.email && !isEmail(formData.email) && !isNotEmpty(formData.email);
	const isInvalidPassword =
		didEdit.password && !hasMinLength(formData.password, 8);

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
				<Input
					label="Email"
					id="email"
					type="email"
					error={isInvalidEmail && 'Please Enter a valid Email'}
					value={formData.email}
					onChange={(event) => handleFormChange('email', event.target.value)}
					onBlur={(event) => handleInputBlur('email', event)}
				/>

				<Input
					label="Password"
					id="password"
					type="password"
					value={formData.password}
					onChange={(event) => handleFormChange('password', event.target.value)}
					onBlur={(event) => handleInputBlur('password', event)}
					error={isInvalidPassword && 'Password must be at least 8 characters'}
				/>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
