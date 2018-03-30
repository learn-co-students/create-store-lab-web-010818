import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    hometown: '',
    username: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        hometown: this.state.hometown,
        username: this.state.username
      }
    })

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.username} type="text" name="username" placeholder="username..."/>
        <input onChange={this.handleChange} value={this.state.hometown} type="text" name="hometown" placeholder="hometown..."/>
        <input type="submit"/>
      </form>
    );
  }
};

export default UserInput;
