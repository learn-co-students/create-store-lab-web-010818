import React, { Component } from 'react';


class UserInput extends Component {
  state = {
    username: "",
    hometown: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  handleOnSubmit = (e) => {
    e.preventDefault()

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });
  }


  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(event) => this.handleChange(event)}
              placeholder="username" />
          </p>
          <p>
            <input
              type="text"
              name="hometown"
              value={this.state.hometown}
              onChange={(event) => this.handleChange(event)}
              placeholder="hometown" />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
