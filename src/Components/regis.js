
import React, { Component } from 'react';

class regis extends Component {
  regis = () => {
    fetch('https://firstone20181124.herokuapp.com/register-user',{
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    }).then((response) => {
      response.json().then((jsonResponse) => {
        console.log(jsonResponse)   
      })
    })
  }
  onChange = (input) => {
    this.setState({
      [input.target.name]: input.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    return true;
  }
  render() {
    return <form onSubmit={this.onSubmit}>
      <input type="text" name="name" onChange={this.onChange}/>
      <input type="email" name="email" onChange={this.onChange}/>
      <input type="password" name="password" onChange={this.onChange}/>
      <input type="submit" value="Register" onClick={this.register}/>
    </form>
  }
}
export default regis

