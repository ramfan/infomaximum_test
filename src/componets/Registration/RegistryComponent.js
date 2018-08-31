import React, {Component} from 'react';
import Auth from "../Forms/Auth";
import Registration from "./Registration";
import {connect} from "react-redux";
import {Background} from "../RooStyle";
class RegistryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(ev) {
        this.setState({
            email: ev.email,
            password: ev.password
        })
    };

    render() {

        return (
            <Background>
                <h3 style={{fontFamily: "OpenSans", marginLeft: '10%', marginRight: '10%'}}>
                    <strong>Задайте электронную почту и пароль для администратора системы</strong>
                </h3>
                <div>
                    <Auth onSubmit={this.handleSubmit} textVal={'Зарегистрироваться'}/>
                    {(this.state.email !== null && this.state.password !== null) ?
                        <Registration
                            email={this.state.email}
                            password={this.state.password}
                        /> : null}
                </div>
            </Background>
        )

    }
}

export default connect(state => {
    return{
        formData: state.form.AuthForm
    }})(RegistryComponent)