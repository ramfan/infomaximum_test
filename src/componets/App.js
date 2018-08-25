import React, {Component} from 'react';
import Auth from "./Forms/Auth";
import { Link } from 'react-router-dom';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Main from "./main/Main";
import {connect} from "react-redux";



class App extends Component {

    componentWillReceiveProps = (props) => {
    return {
        values: props.formData.values
    };
}
    render() {

        return(
        <div>
           <Auth/>
           <Main email={this.props.formData.values.email} password={this.props.formData.values.password}/>
        </div>
        )

    }
}
App.defaultProps = {
    formData: {
        values: {
            email: '',
            password: ''
        }
    }
};

export default connect(state => ({
    formData: state.form.AuthForm
}))(App)