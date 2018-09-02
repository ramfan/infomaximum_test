
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {validate} from "./validate";
import {ButtonStyle, CustomField} from "../RooStyle";
import {ThemeProvider, withTheme} from 'react-fela'
import CustomInput from "./CustomInput";
import submit from './submit'
import Error from "./Error";

const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
        <div>
            <CustomInput {...input} label={label} touched={touched} error={error} type={type}/>

        </div>

);

const Auth = props => {
    const { handleSubmit, pristine, reset, submitting, textVal, error, isReg } = props;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <Field
                            name="email"
                            component={renderField}
                            type="email"
                            label="Электронная почта"

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
                            label="Введите пароль"
                        />
                    </div>


                </div>
                {
                    isReg === true ?

                        <div>
                            <div><br/></div>
                            <div>
                                <Field
                                    name="repassword"
                                    component={renderField}
                                    type="password"
                                    label="Повторите пароль"
                                />
                            </div>


                    </div>: null
                }


                <div>
                    <ButtonStyle type="submit" name="Submit" disabled={pristine || submitting} >
                        <strong> {textVal}</strong>
                    </ButtonStyle>
                        {error && <Error/>}
                </div>

            </form>

        </div>
    )
};
//Auth = withTheme(Auth)
export default reduxForm({
    form: 'AuthForm',
    initialValues:  {
        password: '',
        email: '',
    },
    validate
})(Auth)

