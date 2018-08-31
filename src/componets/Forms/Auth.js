
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {validate} from "./validate";
import {ButtonStyle, CustomField} from "../RooStyle";
import {ThemeProvider} from 'react-fela'
import CustomInput from "./CustomInput";
const theme =  {
        textAlign: 'center',
        position: 'relative',
        width: '80%',
        height: '24px',
        outline: 'none',
        background: '#ffffff !important',
        marginLeft: '10%',
        marginRight: '10%',
};
const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
  <div>

            <ThemeProvider theme={theme}>
                <CustomInput {...input} label={label} touched={touched} error={error} type={type} theme={theme} />
            </ThemeProvider>
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
                        label="ivanov@mail.domen"

                    />
                </div>
            </div>
            <div><br/></div>
            <div>
                <div>
                    <Field
                        name="password"
                        component={renderField}
                        type="password"
                        label="Password"
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

