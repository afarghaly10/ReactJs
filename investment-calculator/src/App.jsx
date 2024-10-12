import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';

function App() {
	return (
		<>
			<Header />
			<main>
				<UserInput />
				<ResultsTable />
			</main>
		</>
	);
}

export default App;
