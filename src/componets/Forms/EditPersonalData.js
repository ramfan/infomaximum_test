import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {validate} from "./validate";
import {connect} from "react-redux";
import {Background, ButtonStyle, InCenter} from "../RooStyle";
import { Container, Row, Col } from 'react-grid-system';
import {renderEditField as renderField} from "./renderField";
import Error from "./Error";
import {actionCreators} from "../../store/duckStore";


const ContainerStyle =  {marginLeft: 0, maxWidth: 'content', };
const formSubmitStyle = {width: '100%'};
const titleStyle = {marginTop: '8%'};
const buttonStyle = {marginTop: '6%'};
const polygonStyle = {background: '#ffffff', paddingTop: '2%', marginTop: '1%'};
const fieldStyle = {width:'50%', margin: '2%'};
const border = {borderBottom: '1px solid #D6DCE9'};
const lastField = {width:'50%', margin: '2%', paddingBottom: '4%'};
const errorStyele = {width:'50%', margin: '2%', paddingBottom: '4%', cursor: 'pointer'};

class EditPersonalData extends Component{
    constructor(props){
        super(props)
        this.abort = this.abort.bind(this)
    }
    abort(){
        this.props.errorReport(null, false);
    }
    render(){
        const { handleSubmit, pristine, textVal, submitting, lastName, firstName } = this.props;
        return (

                <Container fluid style={ContainerStyle}>
                    <Row >
                        <Col  md={12}>
                            <form onSubmit={handleSubmit} style={formSubmitStyle}>
                                <Row>
                                    <Col md={8}  style={titleStyle}>
                                        <h1>{firstName}&nbsp;{lastName}. Редактирование</h1>
                                    </Col>
                               <Col md={4} style={buttonStyle}>
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
                                        <div style={polygonStyle}>
                                            <div style={fieldStyle}>
                                                <Field
                                                    name="firstName"
                                                    component={renderField}
                                                    type="text"
                                                    placeholder="Password"
                                                    label={"Имя"}
                                                />
                                            </div>

                                        <div>
                                            <div style={fieldStyle}>
                                                <Field
                                                    name="lastName"
                                                    component={renderField}
                                                    type="text"
                                                    placeholder="Password"
                                                    label={"Фамилия"}
                                                />
                                            </div>

                                            <div style={border}>&nbsp;</div>

                                        </div>
                                            <div style={lastField}>

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
                            {
                                this.props.errorIsReady ?
                                    <div style={lastField} onClick={this.abort}>
                                        <Error textVal={this.props.errorReportText}/>
                                    </div>
                                    : null
                            }
                        </Col>
                    </Row>
                </Container>
        )
    }


}
const {errorReport} = actionCreators
  EditPersonalData = reduxForm({
    form: 'EditPersonalData',
      enableReinitialize: true,
    validate
}, )(EditPersonalData);
export default connect(state => {
    console.log("EDIT", state)
    return {
        errorReportText: state.getReducer.reportError,
        errorIsReady: state.getReducer.isReadyError,
        initialValues: {

            firstName: state.getReducer.firstName,
            lastName: state.getReducer.lastName,
            email: state.getReducer.email
        }
    }
}, {errorReport})(EditPersonalData)
