import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import Profile from "./components/UserProfile";


function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
	return (
		<>
			<Header />
			{!isLoggedIn ? <Auth /> : <Profile />}
			<Counter />
		</>
	);
}

export default App;
