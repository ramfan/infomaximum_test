//
// import React, {Component} from 'react';
// import {connect} from 'react-redux'
// import PropTypes from 'prop-types';
// import {auth} from "../../Action-Creators/AC";
// import {Field, reduxForm} from 'redux-form'
//
// class Auth extends Component {
//     render() {
//         const {handleSubmit} = this.props
//         return (
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <Field name='name' component='input' type='text'/>
//                     <Field name='surname' component='input' type='text'/>
//                     <button type='submit'>send</button>
//                 </form>
//             </div>
//         )
//     }
//
// }
//
// export default reduxForm({
//     form: 'simpleForm',
//     onSubmit: values => console.log('sended', values)
// })(Auth);

import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Auth = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
   const state = {
        firstName: '',
        lastName: '',
        email: '',
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                        value={(ev) => (this.setState({firstName: ev.target.value}))}
                    />
                </div>
            </div>
            <div>
                <label>Last Name</label>
                <div>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                    />
                </div>
            </div>


            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(Auth)

