import React, { Component } from 'react';
import logo from './logo.svg';

import Footer from './Components/Footer';
import { Switch, Route, Link } from 'react-router-dom'

import Review from './Components/Review';
import Header from './Components/Header';
import Search from './Components/Search';
import Form from './Components/Form';
import List from './Components/List';
import Login from './Components/Login';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import MarriageForm from './Components/MarriageForm';

class App extends Component {
  render() {
    return (
      <div>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" component={Form} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/marriage" component={MarriageForm} />
      <Route path="/list" component={List} />
      
      </div>
    );
  }
}

export default App;
