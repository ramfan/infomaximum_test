import React, {PureComponent} from 'react';
import {  graphql } from 'react-apollo';
import {personalData} from "../../queries";
import {connect} from "react-redux";
import {actionCreators} from "../../store/duckStore";
import {Link} from "react-router-dom";
import {ThemeProvider} from 'react-fela';
import {} from 'react-fela'
import EditPersonalData from "../Forms/EditPersonalData";
import {withTheme} from "react-fela/";
import {Col, Container, Row} from "react-grid-system";
import SideBar from "./MenuBar";
import LeftBar from "./LeftBar";
import Edit from "./queryOfEdit";
import LayoutComponent from "../LayoutComponent";
import TopBar from "../Processet/TopBar";
import Error from "../Forms/Error";



class PersonalPage extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            lastName: null,
            firstName: null,
            email: null,
            isSubmit: false,
            flag: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(ev){
        console.log('SEND')
        this.setState({
            firstName: ev.firstName,
            lastName: ev.lastName,
            email: ev.email,
            isSubmit: true
        });
    }

    render() {
        const { data, Profile, showMenu } = this.props;
        if (data.loading) {
            return <div>Loading...</div>
        }
        Profile(this.props.data.User, this.props);
        const sideBar = {paddingLeft: 0,paddingTop: '3%', marginTop: '7.4%'};
        const menuBar = {paddingLeft: 0, height: '100%'};
        console.log('PROOOPS', this.props)
        return (
            <div>
                {/*{*/}
                    {/*this.props.errorReport.error ? */}
                        {/*<div style={{zIndex: 9999}}>*/}
                            {/*<Error textVal={this.props.errorReport.error}/>*/}
                        {/*</div>: null*/}
                {/*}*/}
                <LayoutComponent
                    top={<TopBar visible={false} search={false}/>}
                    left={!this.props.toggle ?  <LeftBar/> :<SideBar/>}
                    content={<EditPersonalData onSubmit = {this.handleSubmit}
                                               textVal = {"Сохранить и вернуться"}
                                               firstName = {data.User.firstName}
                                               lastName = {data.User.lastName}/>}/>

                    {
                        this.state.isSubmit ?
                            <Edit
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                email={this.state.email}
                                id={this.props.match.params.token}
                                flag={true}
                            />:null
                    }

            </div>



        );
    }

}
const queryOptions  = {
    options: props =>{
            return {
                variables: {
                    id: props.match.params.token
                }
        }
    }
};
const {Profile, show, errorReport} = actionCreators
PersonalPage = withTheme(PersonalPage);
PersonalPage = graphql(personalData, queryOptions)(PersonalPage);
export default connect(state => ({
    toggle: state.getReducer.flag,
    error: state.getReducer.reportError,
    errorIsReady: state.getReducer.isReadyError
}), {Profile, show, errorReport})(PersonalPage);
