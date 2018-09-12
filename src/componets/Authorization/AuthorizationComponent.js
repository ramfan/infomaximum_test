import React, {Component} from 'react';
import {connect} from "react-redux";
import Auth from '../Forms/Auth'
import Authorization from "./Authorization";
import {Background} from "../RooStyle";

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
       // console.log('EVENTS', ev);
        this.setState({
            email: ev.email,
            password: ev.password
        })
    }

    render() {
        return(
            <Background width={'30%'} height={100+'%'} marginTop={'10%'}  background={'#ffffff'} top={'50%'} left={'50%'}>
                    <div>
                    <Auth textVal={'Войти в систему'} onSubmit = {this.handleSubmit}/>
                    {(this.state.email !== null &&  this.state.password !== null)?
                        <Authorization
                            email = {this.state.email}
                            password = {this.state.password}
                        />: null }
                </div>
            </Background>
        )
    }
}

export default connect(state => ({
    formData: state.form.AuthForm
}))(AuthorizationComponent);
