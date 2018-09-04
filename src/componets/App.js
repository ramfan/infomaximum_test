import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Background, ButtonStyle, SpanColor} from "./RooStyle";

class App extends Component {

    render() {

        return(
           <div>
                <Background width={'30%'} height={100 + '%'} marginTop={'10%'} background={'#ffffff'} top={'50%'} left={'50%'}>
                    <div>
                        <Link to={`/auth`} style={{textDecoration: 'none'}}>
                            <ButtonStyle width={'80%'}
                                         marginRight={'10%'}
                                         marginTop={'8%'}
                                         marginLeft={'10%'}
                            >
                                <strong>Вход в систему</strong>
                            </ButtonStyle>
                        </Link>
            
                        <Link to={`/registry`} style={{textDecoration: 'none'}}>
                            <ButtonStyle width={'80%'}
                                         marginRight={'10%'}
                                         marginTop={'8%'}
                                         marginLeft={'10%'}
                            >
                                <strong>Регистрация</strong>
                            </ButtonStyle>
                        </Link>
            
                    </div>
                </Background>
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