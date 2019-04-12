import React from 'react';
import {connect} from 'react-redux';

import {addSmurf} from '../actions';

class AddSmurfForm extends React.Component {
    state ={
        name: '',
        age: '',
        height: ''
    }

    addSmurf = event => {
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
                <button onClick={this.addSmurf}>Submit</button>
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