import Header from './components/Header.jsx';
import Login from './components/Login-State.jsx';
import Signup from './components/Signup.jsx';

function App() {
	return (
		<>
			{/* <nav style={'background-color: #333; padding: 1rem;'}>Home</nav> */}
			<Header />
			<main>
				<Login />
			</main>
		</>
	);
}

export default App;
