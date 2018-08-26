import React, {Component} from 'react';
import {connect} from "react-redux";
import AuthorizationComponent from "./Authorization/AuthorizationComponent";
import RegistryComponent from './Registration/RegistryComponent'
import {Link} from "react-router-dom";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(ev){
        console.log('EVENT', ev);
        this.setState({
            email: ev.email,
            password: ev.password
        });
        this.getRegistration = this.getRegistration.bind(this);
        this.getAuthorization = this.getAuthorization.bind(this);
    };
    render() {

        return(
        <div>
            <Link to={`/auth`}>
                <button onClick={this.getAuthorization}>Sign In</button>
            </Link>

            <Link to={`/registry`}>
                <button onClick={this.getRegistration}>Sign Up</button>
            </Link>

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

export default connect(state => {
    return{
    formData: state.form.AuthForm
}})(App)