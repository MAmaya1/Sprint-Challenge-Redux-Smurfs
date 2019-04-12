import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import {addSmurf} from '../actions';

class AddSmurfForm extends React.Component {
    state ={
        name: '',
        age: '',
        height: ''
    }

    addSmurf = event => {
        event.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form className="addSmurf">
                <h2>Add New Smurf</h2>
                <input
                    onChange={this.handleChange}
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                />
                <input
                    onChange={this.handleChange}
                    name="age"
                    placeholder="age"
                    value={this.state.age}
                />
                <input
                    onChange={this.handleChange}
                    name="height"
                    placeholder="height"
                    value={this.state.height}
                />
                {this.props.addError && (
                    <p>{this.props.addError}</p>
                )}
                <button onClick={this.addSmurf}>
                    {this.props.addingSmurf ? (
                        <Loader type="ThreeDots" color="#88CCFF" height={20} width={20} />
                    ) : (
                        'Submit'
                    )}
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addSmurf,
        addError: state.addError
    }
}

export default connect(mapStateToProps, {addSmurf})(AddSmurfForm);