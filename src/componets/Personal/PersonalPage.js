import React, {PureComponent} from 'react';
import {  graphql } from 'react-apollo';
import {personalData} from "../../queries";
import {connect} from "react-redux";
import {Profile, show} from "../../Action-Creators/AC";
import {Link} from "react-router-dom";
import {ThemeProvider} from 'react-fela';
import {} from 'react-fela'
import EditPersonalData from "../Forms/EditPersonalData";
import {withTheme} from "react-fela/";
import {Col, Container, Row} from "react-grid-system";
import SideBar from "./MenuBar";
import LeftBar from "./LeftBar";



class PersonalPage extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            showMenu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);

    }
    toggleMenu(){
        this.props.show(this.props.toggle);
    };
    render() {
        const style = {
            width: this.props.theme.personalPage.width,
            height: this.props.theme.personalPage.height,
            backgroundColor: this.props.theme.personalPage.background,

        };
       const { data, Profile, showMenu } = this.props;
        if (data.loading) {
            return <div>Loading...</div>
        }
        Profile(this.props);
        const toggleHide = {
            display: this.props.theme.personalPage.toggleHide.display,
            paddingLeft: this.props.theme.personalPage.toggleHide.paddingLeft
        }
        const sideBar = {paddingLeft: 0,paddingTop: '3%', marginTop: '7.4%'};
        const menuBar = {paddingLeft: 0, height: '100%'};
        const selectStyle = !this.props.toggle? sideBar: menuBar;
        console.log('REDUX', this.props)
        return (
            <div style={style} >
                <Container fluid style={{width: '100%'}} >
                    <div  onClick={this.toggleMenu}>
                        <Row xs={12} md={12}
                             style={{width: '96%', height: '40px', background: '#ffffff', padding: '1%', position: 'absolute'}}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="white" fill-opacity="0.01"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H8V8H4V4ZM10 10H14V14H10V10ZM14 4H10V8H14V4ZM16 4H20V8H16V4ZM8 10H4V14H8V10ZM16 10H20V14H16V10ZM8 16H4V20H8V16ZM10 16H14V20H10V16ZM20 16H16V20H20V16Z" fill="#6879BB"/>
                            </svg>

                            <Col xs={1} style={{width: '100%', height: '25px', paddingTop: '0.22%'}} >
                                <div style={{
                                    color: '#535374',
                                    fontSize: '12px',
                                    paddingTop: '1%'
                                }}><strong>Меню</strong></div>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                       <Col  md={2} style={selectStyle}>
                            {
                                !this.props.toggle ?  <LeftBar/> :<SideBar/>

                            }

                        </Col>
                       <Col md={10} >
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
export default connect(state => ({
    toggle: state.menuOption.flag
}), {Profile, show})(PersonalPage);
