import React, {Component} from 'react';
import {  graphql } from 'react-apollo';
import {personalData} from "../../queries";
import {connect} from "react-redux";
import {Profile} from "../../Action-Creators/AC";
import {Link} from "react-router-dom";
import {ThemeProvider} from 'react-fela';
import {} from 'react-fela'
import EditPersonalData from "../Forms/EditPersonalData";
import {withTheme} from "react-fela/";
import {Col, Container, Row} from "react-grid-system";

class PersonalPage extends Component {

    render() {

       const { data, Profile } = this.props;
        console.log('PROOOPS', this.props)
        if (data.loading) {
            return <div>Loading...</div>
        }
        Profile(this.props);
        const style = {
            width: this.props.theme.personalPage.width,
            height: this.props.theme.personalPage.height,
            backgroundColor: this.props.theme.personalPage.background
        };
        return (
            <div style={style}>
                <Container fluid style={{width: '100%'}}>
                    <Row xs={12} md={12} style={{width: '100%', height: '27px', background: '#ffffff', position: 'absolute'}} on>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" fill="white" fill-opacity="0.01"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H8V8H4V4ZM10 10H14V14H10V10ZM14 4H10V8H14V4ZM16 4H20V8H16V4ZM8 10H4V14H8V10ZM16 10H20V14H16V10ZM8 16H4V20H8V16ZM10 16H14V20H10V16ZM20 16H16V20H20V16Z" fill="#6879BB"/>
                        </svg>
                        <Col xs={1} style={{width: '100%', height: '25px', paddingTop: '1px'}}>
                            <div style={{
                                color: '#535374',
                                fontSize: '12px',
                                paddingTop: '1%'
                            }}><strong>Меню</strong></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col  md={2} style={{paddingLeft: 0,paddingTop: '3%', marginTop: '5%',}}>
                            <div style={{
                                borderLeft: '4px solid #6879BB',
                                background: 'rgba(104, 121, 187, 0.1)',
                                height: '48px',
                                textAlign: 'center,' ,
                                paddingTop: '11%',


                            }}>
                                <strong style={{
                                    color: '#535374',
                                    fontSize: '12px'
                                }}>&nbsp;&nbsp;&nbsp;Общие данные</strong>
                            </div>
                        </Col>
                       <Col md={10}>
                           <EditPersonalData onSubmit = {this.handleSubmit}
                                             textVal = {"Сохранить и вернуться"}
                                             firstName = {data.User.firstName}
                                             lastName = {data.User.lastName}
                           />
                       </Col>

                    </Row>
                </Container>

            </div>
        );
    }
}
const queryOptions  = {
    options: props =>{
            return {
                variables: {
                    token: props.match.params.token
                }
        }
    }
};
PersonalPage = withTheme(PersonalPage);
PersonalPage = graphql(personalData, queryOptions)(PersonalPage);
export default connect(null, {Profile})(PersonalPage);
