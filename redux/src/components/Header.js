import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
const { logout } = authActions;

const Header = () => {
  const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
      {isLoggedIn &&
			<nav>
				<ul>
					<li>
						<a href="/">My Products</a>
					</li>
					<li>
						<a href="/">My Sales</a>
					</li>
					<li>
						<button onClick={logoutHandler}>Logout</button>
					</li>
				</ul>
			</nav>}
		</header>
	);
};

export default Header;
