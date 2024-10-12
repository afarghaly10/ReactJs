import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';

function App() {
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
		<>
			<Header />
			<main>
				<UserInput inputValues={userInput} onInputChange={handleInputChange} />
				<ResultsTable />
			</main>
		</>
	);
}

export default App;
