import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: "",
    hometown: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
    this.setState({
      username: "",
      hometown: ""
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
        <input type="text" value={this.state.hometown} name="hometown" onChange={this.handleChange}/>
        <input type="Submit"/>
      </form>
    );
  }
};

export default UserInput;
