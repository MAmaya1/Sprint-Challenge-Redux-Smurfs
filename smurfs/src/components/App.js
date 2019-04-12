import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import SmurfsList from './SmurfsList';
import AddSmurfForm from './AddSmurfForm';

import {getSmurfs} from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

//  App Constructor

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Smurfs Village</h1>
        {this.props.fetchingSmurfs && (
          <Loader type="ThreeDots" color="#88CCFF" height={50} width={50} />
        )}
        {this.props.smurfs && (
          <SmurfsList smurfs={this.props.smurfs}/>
        )}
        {this.props.loadError && (
          <p>{this.props.loadError}</p>
        )}
        <AddSmurfForm/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    loadError: state.loadError
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
