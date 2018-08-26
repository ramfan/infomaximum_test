
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {validate} from "./validate";

const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
  <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} style={touched? error?
                {borderColor: 'red'}:
                {borderColor:''}:
                {borderColor:''}} />
        </div>
    </div>
);

const Auth = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <Field
                        name="email"
                        component={renderField}
                        type="email"
                        placeholder="Email"

                    />
                </div>
            </div>
            <div>
                <div>
                    <Field
                        name="password"
                        component={renderField}
                        type="password"
                        placeholder="Password"
                    />
                </div>


            </div>


            <div>
                <button type="submit" name="Submit" disabled={pristine || submitting} >
                    Submit
                </button>
                <button type="submit" name="Clear" disabled={pristine || submitting} >
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'AuthForm',
    initialValues:  {
        password: '',
        email: '',
    },
    validate
})(Auth)

