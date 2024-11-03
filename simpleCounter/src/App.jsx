import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
	log('<App /> rendered');
	const [chosenCount, setChosenCount] = useState(0);

	const handleSetCount = (num) => {
		setChosenCount(num);
	};

	return (
		<>
			<Header />
			<main>
				<ConfigureCounter setCount={handleSetCount} />
				<Counter initialCount={chosenCount} />
			</main>
		</>
	);
}

export default App;
