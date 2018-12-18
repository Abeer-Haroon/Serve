import React, { Component } from 'react';


import Footer from './Footer';
import { Switch, Route, Link } from 'react-router-dom'
import Review from './Review';
import Header from './Header';
import Search from './Search';
import Form from './Form';
import List from './List';
import Login from './Login';
import RegistrationForm from './RegistrationForm';
class Home extends Component {
  render() {
    return <div>
    <Header/>
    <Search/>
  
    <Footer/>
      </div>

  }
}

export default Home;
