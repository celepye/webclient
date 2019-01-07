import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Editbar from './components/Editbar';
import Content from './components/Content';
import Home from './components/Home';
import Tools from './components/Tools';
import {BrowserRouter as Router, Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
          <Navbar></Navbar>
          <Route path="/" component={Header}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/post/:category" component={Editbar}></Route>
          <Route path="/post/:category" component={Content}></Route>
          <Route path="/tools" component={Tools}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
