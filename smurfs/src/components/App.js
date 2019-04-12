import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import SmurfsList from './SmurfsList';

import {getSmurfs} from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Smurfs Village</h1>
        {this.props.fetchingSmurfs && (
          <Loader type="ThreeDots" color="#somecolor" height={50} width={50} />
        )}
        {this.props.smurfs && (
          <SmurfsList smurfs={this.props.smurfs}/>
        )}
        {this.props.error && (
          <p>{this.props.error}</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
