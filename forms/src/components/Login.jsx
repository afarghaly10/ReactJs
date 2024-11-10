import { useRef, useState } from 'react';

export default function Login() {
	const [isInvalidEmail, setIsInvalidEmail] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		const isValidEmail = email.includes('@');
		if (!isValidEmail) {
			setIsInvalidEmail(true);
			// prevent http request if invalid email
			return;
		}

		setIsInvalidEmail(false);
		console.log('----------------------------');
		console.log(`Sending HTTP request...`);
		console.log('----------------------------');
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" ref={emailRef} />
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
						ref={passwordRef}
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
