
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {validate} from "./validate";

const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
  <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} style={touched? error? {borderColor: 'red'}: {borderColor:''}: {borderColor:''}} />
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
    form: 'AuthForm',
    initialValues:  {
        password: 'Password',
        email: 'ivanov@Corp.domen',
    },
    validate
})(Auth)

