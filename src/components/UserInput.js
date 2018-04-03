import React, { Component } from 'react';


class UserInput extends Component {
  state = {
    username: "",
    hometown: "",
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
 }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          </label>
          <label>
            Hometown:
            <input type="text" name="hometown" value={this.state.hometown} onChange={this.handleChange}/>
            <input type="submit" value="Submit"/>
          </label>
        </form>
      </div>
    );
  }
};

export default UserInput;
