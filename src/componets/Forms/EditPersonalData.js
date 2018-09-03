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
        const { handleSubmit, pristine, textVal, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div style={{width: '70%', display: 'inline-block'}}>
                    <div style={{width: '20%', float: 'right', marginTop: '5px', marginLeft: '200px'}}>
                        <ButtonStyle type="submit" name="Submit" disabled={pristine || submitting} width={'100'} >
                            <strong> {textVal}</strong>
                        </ButtonStyle>
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
                        <div><hr/></div>
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
