import React, { Component } from "react";

class UserInput extends Component {
	state = {
		username: "",
		hometown: ""
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.store.dispatch({
			type: "ADD_USER",
			user: this.state
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} name="username" />
					<input type="text" onChange={this.handleChange} name="hometown" />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default UserInput;
