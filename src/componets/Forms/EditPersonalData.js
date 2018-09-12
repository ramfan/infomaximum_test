import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {validate} from "./validate";
import {connect} from "react-redux";
import {Background, ButtonStyle, InCenter} from "../RooStyle";
import { Container, Row, Col } from 'react-grid-system';
import {renderEditField as renderField} from "./renderField";

class EditPersonalData extends Component{
    render(){
        const { handleSubmit, pristine, textVal, submitting, lastName, firstName } = this.props;
        return (

                <Container fluid style={{marginLeft: 0, maxWidth: 'content', }}>
                    <Row >
                        <Col  md={12}>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={8}  style={{marginTop: '8%'}}>
                                        <h1>{firstName}&nbsp;{lastName}. Редактирование</h1>
                                    </Col>
                               <Col md={4} style={{marginTop: '6%'}}>
                                        <ButtonStyle
                                            type="submit"
                                            name="Submit"
                                            disabled={pristine || submitting}
                                            width={'50%'}
                                            position={''}
                                            marginRight={0}
                                            marginTop={'6.59%'}
                                            marginLeft={'50%'}
                                        >
                                            <strong> {textVal}</strong>
                                        </ButtonStyle>
                               </Col>
                                </Row>
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
                                </div>

                            </form>
                        </Col>
                    </Row>
                </Container>
        )
    }


}

  EditPersonalData = reduxForm({
    form: 'EditPersonalData',
      enableReinitialize: true,
    validate
}, )(EditPersonalData);
export default connect(state => {
    console.log('INIT',state.getReducer)
    return {
        initialValues: {

            firstName: state.getReducer.firstName,
            lastName: state.getReducer.lastName,
            email: state.getReducer.email
        }
    }
})(EditPersonalData)
