import React, {Component} from 'react';
import Auth from "./Forms/Auth";
import Registration from "./Registration/Registration";
import {connect} from "react-redux";
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
        // this.setState({
        //     email: ev.email,
        //     password: ev.password
        // })
    };
    render() {

        return(
        <div>
           <Auth onSubmit = {this.handleSubmit}/>
            {(this.state.email !== null &&  this.state.password !== null)?
                <Registration
                    email = {this.state.email}
                    password = {this.state.password}

                />: null }
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