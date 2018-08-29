
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {validate} from "./validate";
import {ButtonStyle} from "../RooStyle";

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
    const { handleSubmit, pristine, reset, submitting, textVal } = props;

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
                <ButtonStyle type="submit" name="Submit" disabled={pristine || submitting} >
                    {textVal}
                </ButtonStyle>
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

