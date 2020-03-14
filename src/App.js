import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import home from './components/home'
import My from './components/My'
import shopping from './components/shopping'

// import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Route path="/" exact component={home}></Route>
          <Route path="/My" component={My}></Route>
          <Route path="/shopping" component={shopping}></Route>
        </div>
      </Router>
    );
  }
}

export default App;

