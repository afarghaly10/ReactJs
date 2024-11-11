import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import { useInput } from '../hooks/useInput';

export default function Login() {
	const {
		value: emailValue,
		handleFormChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: isInvalidEmail,
	} = useInput('', (value) => isNotEmpty(value) && isEmail(value));

	const {
		value: passwordValue,
		handleFormChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
		hasError: isInvalidPassword,
	} = useInput('', (value) => isNotEmpty(value) && hasMinLength(value, 8));

	const handleSubmit = (event) => {
		event.preventDefault();

		if (isInvalidEmail || isInvalidPassword) {
			return;
		}
		console.log('----------------------------');
		console.log(`submitted: >> `);
		console.log('----------------------------');
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
					value={emailValue}
					onChange={handleEmailChange}
					onBlur={handleEmailBlur}
				/>

				<Input
					label="Password"
					id="password"
					type="password"
					value={passwordValue}
					onChange={handlePasswordChange}
					onBlur={handlePasswordBlur}
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
