import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: '',
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input  type='text'
                  name={'username'}
                  placeholder={'enter username'}
                  onChange={this.handleOnChange}
                  value={this.state.username} />
          <input  type='text'
                  name={'hometown'}
                  placeholder={'enter hometown'}
                  onChange={this.handleOnChange}
                  value={this.state.hometown} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
