import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Background, ButtonStyle, SpanColor} from "./RooStyle";

class App extends Component {

    render() {

        return(
            <Background>
        <div>
            <Link to={`/auth`} style={{textDecoration: 'none'}}>
                <ButtonStyle>
                    Авторизация
                </ButtonStyle>
            </Link>

            <Link to={`/registry`} style={{textDecoration: 'none'}}>
                <ButtonStyle>
                    Регистрация
                </ButtonStyle>
            </Link>

        </div>
            </Background>
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