import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {auth} from "../../Action-Creators/AC";
import {Field, reduxForm} from 'redux-form'

class Auth extends Component {
    render() {
        const {handleSubmit} = this.props
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name='name' component='input' type='text'/>
                    <Field name='surname' component='input' type='text'/>
                    <button type='submit'>send</button>
                </form>
            </div>
        )
    }

}

export default reduxForm({
    form: 'simpleForm',
    onSubmit: values => console.log('sended', values)
})(Auth);
