import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 300,
		expectedReturn: 5.5,
		duration: 12,
	});

	const isValidInput = userInput.duration > 0;

	const handleInputChange = (label, event) => {
		setUserInput((prev) => {
			return {
				...prev,
				[label]: +event.target.value,
			};
		});
	};

	return (
		<>
			<Header />
			<main>
				<UserInput inputValues={userInput} onInputChange={handleInputChange} />
				{isValidInput ? (
					<ResultsTable investmentData={userInput} />
				) : (
					<h3 className="center">Duration must be greater than 0</h3>
				)}
			</main>
		</>
	);
}

export default App;
