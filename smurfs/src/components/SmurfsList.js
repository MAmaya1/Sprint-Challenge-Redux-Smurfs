import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import Smurf from './Smurf';

import {getSmurfs} from '../actions';

class SmurfsList extends React.Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div className="smurf-list">
                {this.props.fetchingSmurfs && (
                    <Loader type="ThreeDots" color="#88CCFF" height={50} width={50} />
                )}
                {this.props.smurfs.map(smurf => (
                    <Smurf
                    key={Math.random()}
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                    />
                ))}
                {this.props.loadError && (
                    <p>{this.props.loadError}</p>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      fetchingSmurfs: state.fetchingSmurfs,
      loadError: state.loadError
    }
  }

export default connect(mapStateToProps, {getSmurfs})(SmurfsList);