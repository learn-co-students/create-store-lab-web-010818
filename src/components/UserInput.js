import React, { Component } from 'react';

class UserInput extends Component {
	state = { username: '', hometown: '' };

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.store.dispatch({ type: 'ADD_USER', user: this.state });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="username"
					placeholder="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="hometown"
					placeholder="hometown"
					value={this.state.hometown}
					onChange={this.handleChange}
				/>
				<input type="submit" />
			</form>
		);
	}
}

export default UserInput;
