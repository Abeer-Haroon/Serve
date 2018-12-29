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
import Register from './Components/Register';
import Flood from './Components/Flood';
import ReportingFloods from './Components/ReportingFloods';
import Emergencies from './Components/Emergencies';
import ReportingEmergencies from './Components/ReportingEmergencies';

import Ambulance from './Components/Ambulance';
import Fire from './Components/Fire';
import Accident from './Components/Accident';
import Police from './Components/Police';
import Crime from './Components/Crime';
import Water from './Components/Water';
import WaterR from './Components/WaterR';
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
      <Route path="/registerr" component={Register} />
      <Route path="/flood" component={Flood} />
      <Route path="/rflood" component={ReportingFloods} />
      <Route path="/emergency" component={Emergencies} />
      <Route path="/remergency" component={ReportingEmergencies} />
      <Route path="/ambulance" component={Ambulance} />
      <Route path="/fire" component={Fire} />
      <Route path="/accident" component={Accident} />
      <Route path="/police" component={Police} />
      <Route path="/crime" component={Crime} />
      <Route path="/water" component={Water} />
      <Route path="/waterr" component={WaterR} />


      </div>
    );
  }
}

export default App;
