import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import ErrorBoundary from "./ErrorBoundary";

const DUMMY_USERS = [
	{ id: 'u1', name: 'Sam' },
	{ id: 'u2', name: 'Manuel' },
	{ id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
	constructor() {
		super();
		this.state = {
			filteredUsers: DUMMY_USERS,
			searchTerm: '',
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: DUMMY_USERS.filter((user) =>
					(user.name).toLowerCase().includes((this.state.searchTerm).toLowerCase())
				),
			});
		}
	}

	searchChangeHandler(event) {
		this.setState({ searchTerm: event.target.value });
	}

	render() {
		return (
			<Fragment>
				<div className={classes.finder}>
					<input type="search" onChange={this.searchChangeHandler.bind(this)} />
				</div>
        <ErrorBoundary>
				<Users users={this.state.filteredUsers} />
        </ ErrorBoundary>
			</Fragment>
		);
	}
}

export default UserFinder;
