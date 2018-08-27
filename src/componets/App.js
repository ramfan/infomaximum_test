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
    };
    render() {

        return(
        <div>
            <Link to={`/auth`}>
                <button>Sign In</button>
            </Link>

            <Link to={`/registry`}>
                <button>Sign Up</button>
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