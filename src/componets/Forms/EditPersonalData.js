import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {validate} from "./validate";
import {connect} from "react-redux";
import CustomInput from "./CustomInput";
import {Background, ButtonStyle, InCenter} from "../RooStyle";
import { Container, Row, Col } from 'react-grid-system';

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
            <Container>

                <form onSubmit={handleSubmit}>
                    {/*<div style={{width: '70%', display: 'inline-block'}}>*/}
                        {/*<div style={{width: '20%', float: 'right', marginTop: '5px', marginLeft: '0'}}>*/}
                    <Row>
                        {/*<div style={{width: '100%', paddingTop: '2%', display: 'flex', marginLeft: '15%'}}>*/}
                        <Col md={8} >
                            <h1>{firstName}&nbsp;{lastName}. Редактирование</h1>
                        </Col>
                   <Col md={4} >
                            <ButtonStyle
                                type="submit"
                                name="Submit"
                                disabled={pristine || submitting}
                                width={'50%'}
                                position={''}
                                marginRight={0}
                                marginTop={'2%'}
                                marginLeft={'50%'}
                            >
                                <strong> {textVal}</strong>
                            </ButtonStyle>
                   </Col>
                    </Row>


                        {/*</div>*/}
                        {/*<Background width={"70%"} height={348+'px'} background={'#ffffff'} top={'50%'} left={'50%'}>*/}
                            <div style={{background: '#ffffff', paddingTop: '2%', marginTop: '1%'}}>
                                <div style={{width:'50%', margin: '2%'}}>
                                    <Field
                                        name="firstName"
                                        component={renderField}
                                        type="text"
                                        placeholder="Password"
                                        label={"Имя"}
                                    />
                                </div>

                            <div>
                                <div style={{width:'50%', margin: '2%'}}>
                                    <Field
                                        name="lastName"
                                        component={renderField}
                                        type="text"
                                        placeholder="Password"
                                        label={"Фамилия"}
                                    />
                                </div>

                                <div style={{borderBottom: '1px solid #D6DCE9'}}>&nbsp;</div>

                            </div>
                                <div style={{width:'50%', margin: '2%', paddingBottom: '4%'}}>

                                <Field
                                    name="email"
                                    component={renderField}
                                    type="email"
                                    placeholder="Email"
                                    label={"Электронная почта"}

                                />
                            </div>
                        {/*</Background>*/}
                    </div>

                </form>

            {/*</div>*/}

            </Container>
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
