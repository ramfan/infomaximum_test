import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {auth} from "../../Action-Creators/AC";

class Auth extends Component {

    state = {
        login: '',
        password: ''
    };
    render() {
        return (
            <div>
               <input type="text" value={this.state.login} placeholder={'Login'} onChange={this.handleChangeLogin}/> <br/>
               <input type="password" value={this.state.password} placeholder={'Password'} onChange={this.handleChangePassword}/> <br/>
                <button onClick={this.handleSubmit}>Sign in</button>
            </div>
        );
    }
     handleChangeLogin = ev => {
         this.setState({
             login: ev.target.value
         });

    };
    handleChangePassword = ev => {
        this.setState({
            password: ev.target.value
        });

    };
    handleSubmit = () => {
        const {auth} =this.props;
        auth(this.state)
    }
}

export default connect (state => ({
    user: state.formReducer
}), {auth})(Auth);
