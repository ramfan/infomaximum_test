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

                <div style={{display: 'block'}}>
                    <EditPersonalData onSubmit = {this.handleSubmit}
                                      textVal = {"Сохранить и вернуться"}
                                      firstName = {data.User.firstName}
                                      lastName = {data.User.lastName}
                    />
                </div>
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
