import React, {PureComponent}from 'react'
import { Field, reduxForm } from 'redux-form'
import {validate} from "./validate";
import {ButtonStyle, CustomField} from "../RooStyle";
import CustomInput from "./CustomInput";
import Error from "./Error";
import {connect} from "react-redux";

const renderField = ({ input, label, type, meta: { touched, error, warning }}) => {
    console.log('ERROR', error);
   return (
        <div>
            <CustomInput {...input} label={label} touched={touched} error={error} type={type} isAuth={true}/>
        </div>
    )
}




class  Auth extends PureComponent {
    render(){
        const { handleSubmit, pristine, reset, submitting, textVal, errorReport, isReg } = this.props;
        console.log('AUTHERR', this.props.errorReport)
        return (
            <div>
                <div style={{margin: '2%'}}>
                    {
                        errorReport && errorReport.error !== null  ? <Error textVal={errorReport.error }/> : null
                    }
                </div>
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
                        <ButtonStyle
                            type="submit"
                            name="Submit"
                            disabled={pristine || submitting}
                            width={'80%'}
                            marginRight={'10%'}
                            marginTop={'8%'}
                            marginLeft={'10%'}
                        >
                            <strong> {textVal}</strong>
                        </ButtonStyle>

                    </div>

                </form>

            </div>
        )
    }

};
//Auth = withTheme(Auth)
Auth = connect(state => {
    console.log('STATE_ERROR', state)
    return{
         errorReport: state.auth.reportError
}}, )(Auth);
export default reduxForm({
    form: 'AuthForm',
    initialValues:  {
        password: '',
        email: '',
    },
    validate
})(Auth)

