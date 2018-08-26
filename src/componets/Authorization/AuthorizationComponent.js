import React, {Component} from 'react';
import {connect} from "react-redux";
import Auth from '../Forms/Auth'
import Authorization from "./Authorization";

class AuthorizationComponent extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: null,
            password: null
        }
    }
    handleSubmit(ev){
        this.setState({
            email: ev.email,
            password: ev.password
        })
    }

    render() {
        return(
            <div>
                <Auth onSubmit = {this.handleSubmit}/>
                {(this.state.email !== null &&  this.state.password !== null)?
                    <Authorization
                        email = {this.state.email}
                        password = {this.state.password}
                    />: null }
            </div>
        )
    }
}

export default connect(state => ({
    formData: state.form.AuthForm
}))(AuthorizationComponent);
