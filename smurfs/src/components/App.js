import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import './App.css';

import SmurfsList from './SmurfsList';
import AddSmurfForm from './AddSmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

//  App Constructor

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav-bar">
            <NavLink to="/">Smurfs Village</NavLink>
            <NavLink to="/add-smurf">Add A Smurf</NavLink>
          </div>
          <Route exact path="/" component={SmurfsList}/>
          <Route path="/add-smurf" component={AddSmurfForm}/>
        </div>
      </Router>
    );
  }
}

export default App;