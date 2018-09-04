import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {validate} from "./validate";
import {connect} from "react-redux";
import CustomInput from "./CustomInput";
import {Background, ButtonStyle, InCenter} from "../RooStyle";

const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
    <div>
        <div style={{position: 'absolute'}}>
            <label style={{fontSize: '14px',color: '#999999', display: 'inline', marginTop: '1%'}}>&nbsp;&nbsp;&nbsp;{label}</label>

        </div>
        <InCenter  width={70} height={34+'px'} marginTop={'-10px'} display={'inline'}>
            <CustomInput  {...input} label={label} touched={touched} error={error} type={type} />
        </InCenter>
    </div>
);
class EditPersonalData extends Component{
    render(){
        const { handleSubmit, pristine, textVal, submitting, lastName, firstName } = this.props;
        return (
            <div style={{width: '100%', paddingTop: '2%', display: 'flex', marginLeft: '15%'}}>
                <h1 style={{position: 'absolute', color:'#535374'}}>{firstName}&nbsp;{lastName}. Редактирование</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{width: '70%', display: 'inline-block'}}>
                        <div style={{width: '20%', float: 'right', marginTop: '5px', marginLeft: '338px'}}>
                            <ButtonStyle
                                type="submit"
                                name="Submit"
                                disabled={pristine || submitting}
                                width={'221px'}
                                position={'fixed'}
                                marginRight={0}
                                marginTop={0}
                                marginLeft={'40%'}
                            >
                                <strong> {textVal}</strong>
                            </ButtonStyle>

                            <div><br/></div>

                        </div>
                        <Background width={70} height={348+'px'} marginTop={'-40px'}>
                            <div>
                                <div style={{width:'50%'}}>
                                    <Field
                                        name="firstName"
                                        component={renderField}
                                        type="text"
                                        placeholder="Password"
                                        label={"Имя"}
                                    />
                                </div>
                                <div><br/></div>

                            </div>
                            <div>
                                <div style={{width:'50%'}}>
                                    <Field
                                        name="lastName"
                                        component={renderField}
                                        type="text"
                                        placeholder="Password"
                                        label={"Фамилия"}
                                    />
                                </div>
                                <div><br/></div>
                                <div style={{borderBottom: '1px solid #D6DCE9'}}>&nbsp;</div>
                                <div><br/></div>
                            </div>
                            <div style={{width:'50%'}}>
                                <Field
                                    name="email"
                                    component={renderField}
                                    type="email"
                                    placeholder="Email"
                                    label={"Электронная почта"}

                                />
                            </div>
                        </Background>
                    </div>

                </form>
            </div>
        )
    }


}

  EditPersonalData = reduxForm({
    form: 'EditPersonalData',

    validate
}, )(EditPersonalData);
export default connect(state => {
    return {
        initialValues: {
            firstName: state.Profile.firstName,
            lastName: state.Profile.lastName,
            email: state.Profile.email
        }
    }
})(EditPersonalData)
