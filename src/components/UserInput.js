import React, { Component } from 'react';

class UserInput extends Component {

  state={
    username: "",
    hometown: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
            placeholder="Username"/>
          <input
            type="text"
            name="hometown"
            onChange={this.handleChange}
            value={this.state.hometown}
            placeholder="Hometown"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
